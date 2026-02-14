import { Box, Typography, Button, Container, Stack, useTheme, alpha } from "@mui/material";
import { NavLink } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SecurityIcon from "@mui/icons-material/Security";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const MotionBox = motion(Box);

const CallToAction = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Box
      ref={ref}
      sx={{
        py: 16,
        position: "relative",
        overflow: "hidden",
        background: `
          linear-gradient(135deg,
            ${theme.palette.primary.main} 0%,
            ${theme.palette.secondary.main} 50%,
            ${theme.palette.info.main} 100%
          )
        `,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, ${alpha("#ffffff", 0.1)} 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, ${alpha("#ffffff", 0.1)} 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, ${alpha("#ffffff", 0.05)} 0%, transparent 50%)
          `,
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: "center", color: "white" }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              lineHeight: 1.2,
            }}
          >
            Turn Clinical Encounters Into Clean, Paid Claims
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mb: 6,
              fontWeight: 400,
              opacity: 0.95,
              maxWidth: 800,
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            With as little human billing effort as possible. See how Viscrow increases collections, reduces denials, and cuts down documentation and billing time for independent outpatient practices.
          </Typography>

          {/* Trust Indicators */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={4}
            justifyContent="center"
            alignItems="center"
            sx={{ mb: 6 }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CheckCircleIcon sx={{ fontSize: 24 }} />
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                96% First-Pass Clean Claim Rate
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <TrendingUpIcon sx={{ fontSize: 24 }} />
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                40% Fewer Preventable Denials
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <SecurityIcon sx={{ fontSize: 24 }} />
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                HIPAA Compliant
              </Typography>
            </Box>
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            justifyContent="center"
            sx={{ mb: 4 }}
          >
            <Button
              component={NavLink}
              to="/contact"
              variant="contained"
              size="large"
              sx={{
                borderRadius: 3,
                px: 6,
                py: 2,
                fontSize: "1.2rem",
                fontWeight: 600,
                backgroundColor: "white",
                color: theme.palette.primary.main,
                boxShadow: `0 8px 32px ${alpha("#000000", 0.2)}`,
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: alpha("#ffffff", 0.9),
                  transform: "translateY(-2px)",
                  boxShadow: `0 12px 40px ${alpha("#000000", 0.3)}`,
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
                px: 6,
                py: 2,
                fontSize: "1.2rem",
                fontWeight: 600,
                borderWidth: 2,
                borderColor: "white",
                color: "white",
                transition: "all 0.3s ease",
                "&:hover": {
                  borderWidth: 2,
                  backgroundColor: alpha("#ffffff", 0.1),
                  transform: "translateY(-2px)",
                },
              }}
            >
              See How It Works
            </Button>
          </Stack>

          <Typography variant="body1" sx={{ opacity: 0.9, fontWeight: 400 }}>
            Built for independent outpatient practices — starting with Primary Care
          </Typography>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default CallToAction;