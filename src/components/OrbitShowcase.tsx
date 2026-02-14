import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";

import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";

type NodeId = "intake" | "coding" | "scrub" | "submit" | "era" | "denials";

type OrbitNode = {
  id: NodeId;
  label: string;
  title: string;
  desc: string;
  bullets: string[];
  color: string;
  icon: ReactNode;
};

const MotionPath = motion.path;

export default function OrbitShowcase() {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));

  const center = { x: 50, y: 50 };

  // ✅ node radius stays the same as before (so pills stay in same position)
  const nodeRadius = mdUp ? 44.0 : 40.8;

  // ✅ ring gets smaller by ~6% (within your 5–8%)
  const ringScale = 0.96;
  const ringMain = nodeRadius * ringScale;

  const ringInner = ringMain - (mdUp ? 10.4 : 9.4);
  const ringOuter = ringMain + (mdUp ? 8.8 : 6.2);


  // card docking box in viewBox units (used so connectors look same length/angle)
  const cardBox = useMemo(
    () => ({
      hx: mdUp ? 17.5 : 22.0,
      hy: mdUp ? 11.8 : 13.6,
      margin: mdUp ? 1.05 : 0.9,
    }),
    [mdUp]
  );

  // ✅ rewrite all 6 nodes with tighter copy (less wrapping -> stable card)
  const baseNodes: OrbitNode[] = useMemo(
    () => [
      {
        id: "intake",
        label: "Documentation Intake",
        title: "Intake & Context",
        desc: "Bring in the note or transcript—Viscrow extracts what billing needs.",
        bullets: ["Note/transcript ingest", "Problems, meds, orders extracted", "Coder-ready encounter context"],
        color: alpha(theme.palette.text.primary, 0.72),
        icon: <DescriptionOutlinedIcon fontSize="small" />,
      },
      {
        id: "coding",
        label: "AI Coding (CPT/ICD)",
        title: "Coding & Charge Capture",
        desc: "CPT/ICD suggestions with documentation-linked rationale.",
        bullets: ["E/M + modifier support", "Dx pointers & necessity checks", "Flags missing documentation"],
        color: theme.palette.warning.main,
        icon: <CodeOutlinedIcon fontSize="small" />,
      },
      {
        id: "scrub",
        label: "Claim Scrubbing",
        title: "Claim Scrubbing",
        desc: "Edits and policy checks to reduce rejections before submit.",
        bullets: ["NCCI + modifier edits", "LCD/NCD + payer rules", "Pre-submit exception routing"],
        color: theme.palette.success.main,
        icon: <FactCheckOutlinedIcon fontSize="small" />,
      },
      {
        id: "submit",
        label: "Submission & Status",
        title: "Submission & Status",
        desc: "Submit via clearinghouse and track outcomes in one place.",
        bullets: ["Clearinghouse submission", "Realtime status + rejections", "Auto-queues corrections"],
        color: theme.palette.info.main,
        icon: <SendOutlinedIcon fontSize="small" />,
      },
      {
        id: "era",
        label: "ERA Auto-Posting",
        title: "ERA / EOB Auto-Posting",
        desc: "Auto-post 835s and reconcile payments and adjustments.",
        bullets: ["835 ingest + posting", "Adjustment mapping", "Unmatched/variance flags"],
        color: theme.palette.primary.main,
        icon: <PaymentsOutlinedIcon fontSize="small" />,
      },
      {
        id: "denials",
        label: "Denials & A/R",
        title: "Denials & A/R",
        desc: "Prioritized worklists so your team only handles exceptions.",
        bullets: ["Denial grouping & trends", "Appeal-ready packets", "A/R priority worklists"],
        color: theme.palette.secondary.main,
        icon: <GavelOutlinedIcon fontSize="small" />,
      },
    ],
    [
      theme.palette.text.primary,
      theme.palette.warning.main,
      theme.palette.success.main,
      theme.palette.info.main,
      theme.palette.primary.main,
      theme.palette.secondary.main,
    ]
  );

  // ✅ evenly distribute pills (no scrambling)
  const nodes = useMemo(() => {
    const step = 360 / baseNodes.length;
    const start = -90;
    return baseNodes.map((n, i) => ({ ...n, angleDeg: start + i * step }));
  }, [baseNodes]);

  const [activeId, setActiveId] = useState<NodeId>("scrub");
  const active = nodes.find((n: any) => n.id === activeId)!;

  const pos = (angleDeg: number) => {
    const a = (angleDeg * Math.PI) / 180;
    return {
      x: center.x + nodeRadius * Math.cos(a),
      y: center.y + nodeRadius * Math.sin(a),
    };
  };
  

  const activePos = pos((active as any).angleDeg);

  // ✅ dock line to card edge (prevents “AI Coding / ERA looks shorter”)
  const dockToCardEdge = useMemo(() => {
    const vx = activePos.x - center.x;
    const vy = activePos.y - center.y;

    const ax = Math.abs(vx);
    const ay = Math.abs(vy);

    const tx = ax < 1e-6 ? Number.POSITIVE_INFINITY : cardBox.hx / ax;
    const ty = ay < 1e-6 ? Number.POSITIVE_INFINITY : cardBox.hy / ay;

    const t = Math.min(tx, ty);

    const bx = center.x + vx * t;
    const by = center.y + vy * t;

    const norm = Math.max(1e-6, Math.sqrt(vx * vx + vy * vy));
    const nx = vx / norm;
    const ny = vy / norm;

    return { x: bx + nx * cardBox.margin, y: by + ny * cardBox.margin };
  }, [activePos.x, activePos.y, cardBox.hx, cardBox.hy, cardBox.margin]);

  // curved path node -> dock
  const connectorD = useMemo(() => {
    const sx = activePos.x;
    const sy = activePos.y;
    const ex = dockToCardEdge.x;
    const ey = dockToCardEdge.y;

    const mx = (sx + ex) / 2;
    const my = (sy + ey) / 2;

    const dx = sx - ex;
    const dy = sy - ey;
    const norm = Math.max(1e-6, Math.sqrt(dx * dx + dy * dy));

    const k = mdUp ? 7.8 : 6.6;
    const ox = (-dy / norm) * k;
    const oy = (dx / norm) * k;


    return `M ${sx} ${sy} Q ${mx + ox} ${my + oy} ${ex} ${ey}`;
  }, [activePos.x, activePos.y, dockToCardEdge.x, dockToCardEdge.y, mdUp]);

  // measure path length so droplet speed/loop is consistent
  const dropletPathRef = useRef<SVGPathElement | null>(null);
  const [pathLen, setPathLen] = useState(120);

  useEffect(() => {
    if (dropletPathRef.current) {
      const len = dropletPathRef.current.getTotalLength();
      if (Number.isFinite(len) && len > 0) setPathLen(len);
    }
  }, [connectorD, mdUp]);

  // ids
  const uid = useMemo(() => Math.random().toString(36).slice(2), []);
  const glowId = `glow-${uid}`;
  const ringSoftId = `ringsoft-${uid}`;

  const seg = Math.max(10, pathLen * 0.13);   // ✅ ~2x longer than your 0.06
  const gap = Math.max(16, pathLen * 0.27);   // ✅ yields ~2–3 droplets on path

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: 540, md: 760 },
        aspectRatio: "1 / 1",
        position: "relative",
        mx: "auto",
        overflow: "visible",
      }}
    >
      {/* glow */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          borderRadius: 999,
          background: `
            radial-gradient(circle at 50% 45%,
              ${alpha(theme.palette.primary.main, 0.12)} 0%,
              ${alpha(theme.palette.info.main, 0.085)} 35%,
              transparent 70%
            )
          `,
          filter: "blur(24px)",
          transform: "scale(1.05)",
          pointerEvents: "none",
        }}
      />

      <Box
        component="svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          overflow: "visible",
          pointerEvents: "none",
        }}
      >
        
        <defs>
          <filter id={glowId}>
            <feGaussianBlur stdDeviation="1.55" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id={ringSoftId}>
            <feGaussianBlur stdDeviation="0.45" />
          </filter>
        </defs>

        {/* outer blurred ring */}
        <circle
          cx={center.x}
          cy={center.y}
          r={ringOuter}
          fill="none"
          stroke={alpha(theme.palette.text.primary, 0.095)}
          strokeWidth={0.82}
          filter={`url(#${ringSoftId})`}
          vectorEffect="non-scaling-stroke"
        />

        {/* main ring */}
        <circle
          cx={center.x}
          cy={center.y}
          r={ringMain}
          fill="none"
          stroke={alpha(theme.palette.text.primary, 0.12)}
          strokeWidth={0.56}
          vectorEffect="non-scaling-stroke"
        />

        {/* inner blurred ring (a bit less visible) */}
        <circle
          cx={center.x}
          cy={center.y}
          r={ringInner}
          fill="none"
          stroke={alpha(theme.palette.text.primary, 0.075)}
          strokeWidth={0.78}
          filter={`url(#${ringSoftId})`}
          vectorEffect="non-scaling-stroke"
        />

        {/* base faint connector (always there) */}
        <path
          d={connectorD}
          fill="none"
          stroke={alpha(active.color, 0.16)}
          strokeWidth={1.05}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />

        {/* the droplet: one short segment that travels along the connector */}
        <MotionPath
            ref={dropletPathRef}
            d={connectorD}
            fill="none"
            stroke={alpha(active.color, 0.92)}
            strokeWidth={1.75}
            strokeLinecap="round"
            filter={`url(#${glowId})`}
            vectorEffect="non-scaling-stroke"
            // ✅ repeating (seg gap) pattern naturally creates multiple droplets
            strokeDasharray={`${seg} ${gap}`}
            animate={{
                // ✅ animate by ONE pattern length, so loop looks seamless
                strokeDashoffset: [0, -(seg + gap)],
            }}
            transition={{
                duration: mdUp ? 1.9 : 1.7, // slower-looking flow but continuous
                ease: "linear",
                repeat: Infinity,
            }}
            />
      </Box>

      {/* center card (FIXED size for every node) */}
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "52%", md: "38%" },
          zIndex: 2,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            borderRadius: 0.7, // ✅ very boxy like Sully
            px: { xs: 1.6, md: 1.8 },
            py: { xs: 1.4, md: 1.55 },
            height: { xs: 194, md: 206 }, // ✅ hard-lock size
            overflow: "hidden",
            border: `1px solid ${alpha(theme.palette.text.primary, 0.11)}`,
            backgroundColor: alpha("#ffffff", 0.84),
            backdropFilter: "blur(12px)",
            boxShadow: `0 22px 55px ${alpha(theme.palette.primary.main, 0.14)}`,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontWeight: 720,
              fontSize: "1.02rem",
              color: theme.palette.primary.main,
              mb: 0.5,
            }}
          >
            Clean Claim Engine
          </Typography>

          <Typography
            sx={{
              fontWeight: 620,
              fontSize: "0.96rem",
              mb: 0.45,
              color: theme.palette.text.primary,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {active.title}
          </Typography>

          <Typography
            sx={{
              color: theme.palette.text.secondary,
              fontSize: "0.89rem",
              mb: 0.85,
              lineHeight: 1.5,
              display: "-webkit-box",
              WebkitLineClamp: 2, // ✅ prevents “AI Coding” from making card taller
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {active.desc}
          </Typography>

          <Box component="ul" sx={{ m: 0, pl: 2, color: theme.palette.text.secondary, flex: 1 }}>
            {active.bullets.map((b) => (
              <Box
                key={b}
                component="li"
                sx={{
                  fontSize: "0.87rem",
                  mb: 0.35,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {b}
              </Box>
            ))}
          </Box>
        </Paper>
      </Box>

      {/* pills */}
      {nodes.map((n: any) => {
        const p = pos(n.angleDeg);
        const isActive = n.id === activeId;

        return (
          <Box
            key={n.id}
            sx={{
              position: "absolute",
              left: `${p.x}%`,
              top: `${p.y}%`,
              transform: "translate(-50%, -50%)",
              zIndex: isActive ? 3 : 1,
            }}
          >
            <Box
              component={motion.button}
              type="button"
              onMouseEnter={() => setActiveId(n.id)}
              onFocus={() => setActiveId(n.id)}
              onClick={() => setActiveId(n.id)}
              whileHover={{ scale: 1.045 }}
              whileTap={{ scale: 0.985 }}
              style={{
                border: "none",
                background: "transparent",
                padding: 0,
                cursor: "pointer",
              }}
              aria-pressed={isActive}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: { xs: 1.05, md: 1.45 },
                  py: { xs: 0.68, md: 0.82 },
                  borderRadius: 999,
                  backgroundColor: alpha("#ffffff", isActive ? 0.95 : 0.86),
                  backdropFilter: "blur(12px)",
                  border: `1px solid ${
                    isActive ? alpha(n.color, 0.42) : alpha(theme.palette.text.primary, 0.10)
                  }`,
                  boxShadow: isActive
                    ? `0 18px 40px ${alpha(n.color, 0.18)}`
                    : `0 14px 30px ${alpha("#000", 0.08)}`,
                  color: theme.palette.text.primary,
                  whiteSpace: "nowrap",
                  fontWeight: 600, // ✅ lighter than before
                  fontSize: { xs: "0.79rem", md: "0.90rem" },
                }}
              >
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: 999,
                    display: "grid",
                    placeItems: "center",
                    background: `linear-gradient(135deg, ${alpha(n.color, 0.22)}, ${alpha(
                      n.color,
                      0.1
                    )})`,
                    border: `1px solid ${alpha(n.color, 0.22)}`,
                    boxShadow: `0 10px 22px ${alpha(n.color, 0.12)}`,
                    color: n.color,
                  }}
                >
                  {n.icon}
                </Box>

                {n.label}
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
