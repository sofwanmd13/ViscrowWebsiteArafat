import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Chip,
  Stack,
  Card,
  CardContent,
  useTheme,
  alpha,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SecurityIcon from "@mui/icons-material/Security";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import FlashOnIcon from "@mui/icons-material/FlashOn";

import OrbitShowcase from "../components/OrbitShowcase";

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionTypography = motion(Typography);

const HeroSection = () => {
  const theme = useTheme();

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0.05, 0.13], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.05, 0.13], [40, 0]);

  const subOpacity = useTransform(scrollYProgress, [0.12, 0.18], [0, 1]);
  const subY = useTransform(scrollYProgress, [0.12, 0.18], [40, 0]);

  const buttonOpacity = useTransform(scrollYProgress, [0.17, 0.24], [0, 1]);
  const buttonY = useTransform(scrollYProgress, [0.17, 0.24], [40, 0]);

  const orbitOpacity = useTransform(scrollYProgress, [0.20, 0.30], [0, 1]);
  const orbitY = useTransform(scrollYProgress, [0.20, 0.30], [40, 0]);

  const features = [
    {
      icon: <FlashOnIcon sx={{ fontSize: 32 }} />,
      title: "Capture & Documentation",
      description: "Ingests notes or transcripts from physician–patient encounters",
      color: theme.palette.primary.main,
      stat: "Automated",
    },
    {
      icon: <AutoGraphIcon sx={{ fontSize: 32 }} />,
      title: "AI Coding & Charge Capture",
      description: "Generates compliant CPT, ICD-10, and HCPCS codes with payer-specific rules",
      color: theme.palette.secondary.main,
      stat: "Compliant",
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 32 }} />,
      title: "Claim Scrubbing & Submission",
      description: "Runs rules engine, payer edits, and LCD/NCD logic to submit clean claims",
      color: theme.palette.success.main,
      stat: "96% Clean",
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 32 }} />,
      title: "ERA Auto-Posting",
      description: "Auto-posts ERAs/EOBs and reconciles payments and adjustments",
      color: theme.palette.info.main,
      stat: "Instant",
    },
    {
      icon: <IntegrationInstructionsIcon sx={{ fontSize: 32 }} />,
      title: "Denial Management & A/R",
      description: "Handles denials, appeals, and A/R follow-up with prioritized worklists",
      color: theme.palette.warning.main,
      stat: "Automated",
    },
  ];

  return (
    <Box
      ref={sectionRef}
      sx={{
        position: "relative",
        pt: { xs: 10, md: 15 },
        pb: { xs: 8, md: 12 },
        overflow: "hidden",
        background: `
          radial-gradient(circle at 20% 15%, ${alpha(theme.palette.primary.main, 0.10)}, transparent 42%),
          radial-gradient(circle at 80% 70%, ${alpha(theme.palette.info.main, 0.10)}, transparent 46%),
          linear-gradient(135deg, #eaf7ff 0%, #f5fbff 45%, #fff5ec 100%)
        `,
        minHeight: "90vh",
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      {/* Background Elements */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        sx={{
          position: "absolute",
          top: "-200px",
          left: "-200px",
          width: "800px",
          height: "800px",
          background: `
            radial-gradient(circle at center, 
              ${alpha(theme.palette.primary.main, 0.14)} 0%, 
              ${alpha(theme.palette.secondary.main, 0.06)} 50%,
              transparent 70%
            )
          `,
          filter: "blur(90px)",
          animation: "float1 20s ease-in-out infinite",
          zIndex: 0,
        }}
      />
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        sx={{
          position: "absolute",
          bottom: "-200px",
          right: "-200px",
          width: "700px",
          height: "700px",
          background: `
            radial-gradient(circle at center, 
              ${alpha(theme.palette.secondary.main, 0.08)} 0%, 
              ${alpha(theme.palette.info.main, 0.06)} 50%,
              transparent 70%
            )
          `,
          filter: "blur(100px)",
          animation: "float2 25s ease-in-out infinite",
          zIndex: 0,
        }}
      />

      <Container
        maxWidth={false}
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: "88%",
          px: { xs: 2, md: 4 },
        }}
      >
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          alignItems={{ xs: "center", md: "flex-start" }}
        >
          {/* LEFT */}
          <Grid item xs={12} md={6} sx={{ pr: { md: 1 } }}>
            <motion.div style={{ opacity: titleOpacity, y: titleY }}>
              <Box sx={{ mb: 2 }}>
                <Chip
                  label="Built for Independent Outpatient Clinics"
                  sx={{
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
                    color: "white",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    px: 1.5,
                    py: 1,
                    height: "auto",
                  }}
                />
              </Box>

              <Typography
                component="h1"
                variant="h1"
                sx={{
                  mb: 2.5,
                  color: theme.palette.text.primary,
                }}
              >
                End-to-End{" "}
                <Box
                  component="span"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    px: 0.2,
                    zIndex: 0,
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: "0.08em",
                      height: "0.28em",
                      borderRadius: 999,
                      background: `linear-gradient(90deg, ${alpha(theme.palette.primary.main, 0.25)}, ${alpha(theme.palette.primary.light, 0.22)})`,
                      zIndex: -1,
                    },
                  }}
                >
                  AI Revenue Cycle
                </Box>{" "}
                Automation
              </Typography>
            </motion.div>

            <motion.div style={{ opacity: subOpacity, y: subY }}>
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  maxWidth: 650,
                  color: theme.palette.text.secondary,
                  fontWeight: 400,
                  lineHeight: 1.7,
                  fontSize: { xs: "1.1rem", md: "1.35rem" },
                }}
              >
                From clinical notes to paid claims, we take care of it all while you focus on your patients. Higher clean-claim rates, fewer denials, and less time spent on billing.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 4.5,
                  maxWidth: 600,
                  color: theme.palette.text.secondary,
                  fontWeight: 400,
                  lineHeight: 1.6,
                  fontSize: "1rem",
                }}
              >
                Optimized for Primary Care practices.
              </Typography>
            </motion.div>

            <motion.div style={{ opacity: buttonOpacity, y: buttonY }}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 2, sm: 1.75 }}
                sx={{ mb: 4 }}
              >
                <Button
                  size="large"
                  variant="contained"
                  component={NavLink}
                  to="/contact"
                  sx={{
                    borderRadius: 3,
                    px: 4,
                    py: 1.5,
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
                    boxShadow: `0 8px 32px ${alpha(theme.palette.primary.main, 0.3)}`,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: `0 12px 40px ${alpha(theme.palette.primary.main, 0.4)}`,
                    },
                  }}
                >
                  Book a Demo
                </Button>

                <Button
                  size="large"
                  variant="outlined"
                  component={NavLink}
                  to="/roi-calculator"
                  sx={{
                    borderRadius: 3,
                    px: 4,
                    py: 1.5,
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    borderWidth: 1,
                    borderColor: theme.palette.primary.main,
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.18)",
                    color: theme.palette.primary.main,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.95)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 18px rgba(0, 0, 0, 0.12)",
                    },
                  }}
                >
                  Try ROI Calculator
                </Button>
              </Stack>
            </motion.div>
          </Grid>

          {/* RIGHT */}
          <Grid item xs={12} md={6}>
  <Box
    sx={{
      pl: { md: 2 },
      mt: { xs: -1, md: -3 }, // ✅ lifts orbit up so bottom never gets cut
    }}
  >
    <OrbitShowcase />
  </Box>
</Grid>

        </Grid>

        {/* Features Section */}
        <Box mt={12}>
          <MotionTypography
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 2,
              fontWeight: 700,
              color: theme.palette.text.primary,
            }}
          >
            From Note → Cash in One Automated Pipeline
          </MotionTypography>

          <MotionTypography
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            variant="h6"
            sx={{
              textAlign: "center",
              mb: 8,
              maxWidth: 750,
              mx: "auto",
              color: theme.palette.text.secondary,
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            The entire revenue cycle automated from the clinical note onward. Designed so your team only handles exceptions, not every claim.
          </MotionTypography>

          <Grid container spacing={4} justifyContent="center">
            {features.map((feature, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <MotionCard
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{
                    y: -12,
                    transition: { duration: 0.3 },
                  }}
                  sx={{
                    height: "100%",
                    borderRadius: 4,
                    background: theme.palette.background.paper,
                    border: `1px solid ${alpha(feature.color, 0.1)}`,
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      borderColor: feature.color,
                      boxShadow: `0 20px 40px ${alpha(feature.color, 0.15)}`,
                      "& .feature-icon": {
                        transform: "scale(1.1) rotate(5deg)",
                        backgroundColor: feature.color,
                        color: "white",
                      },
                      "& .feature-stat": {
                        opacity: 1,
                        transform: "translateY(0)",
                      },
                      "&::before": {
                        opacity: 1,
                      },
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: `linear-gradient(135deg, ${feature.color} 0%, ${alpha(feature.color, 0.7)} 100%)`,
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, height: "100%", display: "flex", flexDirection: "column" }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                      <Box
                        className="feature-icon"
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: 3,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: alpha(feature.color, 0.1),
                          color: feature.color,
                          transition: "all 0.3s ease",
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Chip
                        className="feature-stat"
                        label={feature.stat}
                        size="small"
                        sx={{
                          fontWeight: 700,
                          backgroundColor: alpha(feature.color, 0.1),
                          color: feature.color,
                          border: `1px solid ${alpha(feature.color, 0.2)}`,
                          opacity: 0,
                          transform: "translateY(10px)",
                          transition: "all 0.3s ease",
                        }}
                      />
                    </Box>

                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: theme.palette.text.primary }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                        {feature.description}
                      </Typography>
                    </Box>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <style>
        {`
          @keyframes float1 {
            0% { transform: translate(0px, 0px) scale(1); }
            50% { transform: translate(30px, 20px) scale(1.05); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          @keyframes float2 {
            0% { transform: translate(0px, 0px) scale(1); }
            50% { transform: translate(-25px, -15px) scale(1.03); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
        `}
      </style>
    </Box>
  );
};

export default HeroSection;
