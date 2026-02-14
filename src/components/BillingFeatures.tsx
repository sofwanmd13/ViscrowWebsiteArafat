import { Box, Container, Typography, Grid, Card, CardContent, Chip, Stack, useTheme, alpha } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SecurityIcon from "@mui/icons-material/Security";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionTypography = motion(Typography);

const BillingFeatures = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: <FlashOnIcon sx={{ fontSize: 40 }} />,
      title: "End-to-End Automation",
      description: "Not a point solution. Ties together scribing, coding, scrubbing, claims, ERAs, denials, and A/R in one continuous loop.",
      color: theme.palette.primary.main,
      benefits: [
        "Full revenue cycle from note → cash",
        "No fragmented workflows or manual handoffs",
        "Designed so staff only handles exceptions",
        "Minimal human touch required",
      ],
      stat: "Full Pipeline",
    },
    {
      icon: <AutoGraphIcon sx={{ fontSize: 40 }} />,
      title: "PCP-First Focus",
      description: "Built around Primary Care visit patterns first, then expanding to other outpatient specialties",
      color: theme.palette.secondary.main,
      benefits: [
        "Optimized for common PCP visit types",
        "Handles annual + problem, chronic disease management",
        "Acute visits and follow-ups",
        "Expanding to additional specialties",
      ],
      stat: "PCP Optimized",
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      title: "Rules + AI Combined",
      description: "LLMs + RAG for context and reasoning, plus deterministic rules engine for payer policies and edits",
      color: theme.palette.success.main,
      benefits: [
        "AI for context and medical reasoning",
        "Deterministic rules for payer policies",
        "NCCI, LCD/NCD, and payer edit compliance",
        "Best of both worlds: intelligence + reliability",
      ],
      stat: "Hybrid Approach",
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: "Small Practice–Friendly",
      description: "Simple implementation and UI. Language and UX geared towards office managers and owners, not big health systems",
      color: theme.palette.info.main,
      benefits: [
        "Simple implementation and setup",
        "Clear, plain language (not heavy jargon)",
        "Built for 2–50 provider practices",
        "Outcome-driven: revenue, time, clean claims",
      ],
      stat: "Built for You",
    },
  ];

  return (
    <Box
      ref={ref}
      sx={{
        py: 12,
        background: `
          linear-gradient(135deg, 
            ${alpha(theme.palette.primary.main, 0.02)} 0%, 
            ${alpha(theme.palette.secondary.main, 0.02)} 50%,
            ${alpha(theme.palette.info.main, 0.02)} 100%
          )
        `,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          width: "400px",
          height: "400px",
          background: `radial-gradient(circle at center, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 70%)`,
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          background: `radial-gradient(circle at center, ${alpha(theme.palette.secondary.main, 0.05)} 0%, transparent 70%)`,
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: "center", mb: 8 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: theme.palette.text.primary,
            }}
          >
            What Makes Viscrow Different
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.text.secondary,
              fontWeight: 400,
              maxWidth: 750,
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            We're not just an AI scribe and not just a coding helper. We're the full RCM loop, built specifically for independent outpatient practices.
        </Typography>
        </MotionBox>

        <Grid container spacing={4}>
          {features.map((feature, idx) => (
            <Grid item xs={12} md={6} lg={4} key={idx}>
              <MotionCard
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  background: theme.palette.background.paper,
                  border: `1px solid ${alpha(feature.color, 0.1)}`,
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
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
                    }
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
                  }
                }}
              >
                <CardContent sx={{ p: 4, height: "100%", display: "flex", flexDirection: "column" }}>
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
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
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: theme.palette.text.primary }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary, lineHeight: 1.6, mb: 3 }}>
                      {feature.description}
                    </Typography>

                    <Stack spacing={1}>
                      {feature.benefits.map((benefit, benefitIdx) => (
                        <Box key={benefitIdx} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <CheckCircleIcon sx={{ color: feature.color, fontSize: 16 }} />
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {benefit}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          sx={{ textAlign: "center", mt: 8 }}
        >
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, color: theme.palette.text.primary }}>
            See How It Works
          </Typography>
          <Typography variant="h6" sx={{ color: theme.palette.text.secondary, mb: 4, fontWeight: 400, maxWidth: 600, mx: "auto" }}>
            Get concrete proof that Viscrow increases collections, reduces denials, and cuts down documentation and billing time.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
            <Button
              component={NavLink}
              to="/contact"
              variant="contained"
              size="large"
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
              component={NavLink}
              to="/medical-billing-solutions"
              variant="outlined"
              size="large"
              sx={{
                borderRadius: 3,
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                fontWeight: 600,
                borderWidth: 2,
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
                transition: "all 0.3s ease",
                "&:hover": {
                  borderWidth: 2,
                  backgroundColor: alpha(theme.palette.primary.main, 0.04),
                  transform: "translateY(-2px)",
                },
              }}
            >
              Calculate Your Potential Revenue Lift
            </Button>
          </Stack>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default BillingFeatures;