import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Stack,
  Divider,
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  useTheme,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import InsightsIcon from "@mui/icons-material/Insights";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import ReceiptIcon from "@mui/icons-material/Receipt";
import DiamondIcon from "@mui/icons-material/Diamond";

const MotionBox = motion(Box as any);
const MotionCard = motion(Card as any);

// Animation variants
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      delay: i * 0.1,
    },
  }),
};

const scaleVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const MedicalBillingSolutions = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleContactNavigation = () => {
    navigate('/contact');
  };

  const coreFeatures = [
    {
      icon: <AssignmentTurnedInIcon />,
      title: "AI-Powered Claims Management",
      description: "Submit and track claims with intelligent validation and error prevention",
      color: "#0EA5E9",
      gradient: "linear-gradient(135deg, #0EA5E9 0%, #38BDF8 100%)",
    },
    {
      icon: <ReceiptIcon />,
      title: "ERA Auto-Posting",
      description: "Automated payment posting and reconciliation with real-time tracking",
      color: "#D4AF37",
      gradient: "linear-gradient(135deg, #D4AF37 0%, #E6C547 100%)",
      highlight: true,
    },
    {
      icon: <TrendingUpIcon />,
      title: "Revenue Cycle Analytics",
      description: "Monitor key metrics including days in A/R, collection rates, and denial trends",
      color: "#059669",
      gradient: "linear-gradient(135deg, #059669 0%, #34D399 100%)",
    },
    {
      icon: <IntegrationInstructionsIcon />,
      title: "Seamless EHR Integration",
      description: "Compatible with 50+ EHR systems for seamless data synchronization",
      color: "#7C3AED",
      gradient: "linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)",
    },
    {
      icon: <SecurityIcon />,
      title: "Enterprise Security",
      description: "Bank-level encryption with HIPAA compliance and SOC 2 Type II certification",
      color: "#DC2626",
      gradient: "linear-gradient(135deg, #DC2626 0%, #F87171 100%)",
    },
    {
      icon: <AutorenewIcon />,
      title: "Intelligent Denial Management",
      description: "AI-powered denial prevention and automated appeals with supporting documentation",
      color: "#F59E0B",
      gradient: "linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%)",
    },
  ];

  const benefits = [
    {
      metric: "Reduce Denials",
      description: "Identify common denial patterns and implement prevention strategies",
      icon: <CheckCircleIcon />,
    },
    {
      metric: "Accelerate Payments",
      description: "Streamline claim submission and follow-up processes",
      icon: <SpeedIcon />,
    },
    {
      metric: "Improve Visibility",
      description: "Real-time dashboards for complete revenue cycle transparency",
      icon: <InsightsIcon />,
    },
    {
      metric: "Ensure Compliance",
      description: "Stay current with changing regulations and payer requirements",
      icon: <VerifiedUserIcon />,
    },
  ];

  const workflowSteps = [
    {
      step: "1",
      title: "AI Voice Scribe",
      description: "Real-time voice transcription with intelligent medical coding",
      color: theme.palette.primary.main,
    },
    {
      step: "2",
      title: "Intelligent Coding",
      description: "AI-powered medical coding with validation and compliance checks",
      color: theme.palette.info.main,
    },
    {
      step: "3",
      title: "Claim Submission",
      description: "Submit clean claims with automated scrubbing and validation",
      color: theme.palette.secondary.main,
    },
    {
      step: "4",
      title: "Status Tracking",
      description: "Real-time claim status monitoring and analytics",
      color: theme.palette.success.main,
    },
    {
      step: "5",
      title: "ERA Auto-Posting",
      description: "Automated payment posting and reconciliation",
      color: "#D4AF37",
    },
    {
      step: "6",
      title: "Denial Management",
      description: "AI-powered denial prevention and automated appeals",
      color: theme.palette.warning.main,
    },
    {
      step: "7",
      title: "Invoice Generation",
      description: "Automated patient billing and payment processing",
      color: theme.palette.error.main,
    },
    {
      step: "8",
      title: "Follow-up Claims",
      description: "Automated follow-up and collection management",
      color: "#7C3AED",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#f5f7fa", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          color: "white",
          py: 12,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <MotionBox
                initial="hidden"
                animate="visible"
                variants={fadeInUpVariant}
                custom={0}
              >
                <Typography
                  variant="h2"
                  fontWeight={700}
                  mb={3}
                  sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}
                >
                  Streamline Your Medical Billing Process
                </Typography>
                <Typography variant="h5" mb={4} sx={{ opacity: 0.95 }}>
                  Comprehensive revenue cycle management tools designed for healthcare providers
                </Typography>
                <Stack direction="row" spacing={2} mb={3}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleContactNavigation}
                    sx={{
                      bgcolor: "white",
                      color: theme.palette.primary.main,
                      "&:hover": { bgcolor: alpha("#fff", 0.9) },
                    }}
                  >
                    Schedule Demo
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={handleContactNavigation}
                    sx={{
                      borderColor: "white",
                      color: "white",
                      "&:hover": { borderColor: "white", bgcolor: alpha("#fff", 0.1) },
                    }}
                  >
                    Learn More
                  </Button>
                </Stack>
                <Stack direction="row" spacing={3} mt={4}>
                  <Chip
                    icon={<VerifiedUserIcon />}
                    label="HIPAA Compliant"
                    sx={{ bgcolor: alpha("#fff", 0.2), color: "white" }}
                  />
                </Stack>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Key Benefits Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <MotionBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpVariant}
          custom={0}
          textAlign="center"
          mb={8}
        >
          <Typography variant="h3" fontWeight={600} mb={2}>
            Optimize Your Revenue Cycle
          </Typography>
          <Typography variant="h6" color="text.secondary" maxWidth="md" mx="auto">
            Our platform helps healthcare organizations improve cash flow and operational efficiency
          </Typography>
        </MotionBox>

        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <MotionCard
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={scaleVariant}
                custom={index}
                sx={{
                  height: "100%",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-8px)" },
                }}
              >
                <CardContent sx={{ textAlign: "center", p: 4 }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    {React.cloneElement(benefit.icon, {
                      sx: { fontSize: 30, color: theme.palette.primary.main },
                    })}
                  </Box>
                  <Typography variant="h6" fontWeight={600} mb={1}>
                    {benefit.metric}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {benefit.description}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Core Features Section */}
      <Box sx={{ bgcolor: "white", py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight={600} textAlign="center" mb={2}>
            Complete End-to-End Automation
          </Typography>
          <Typography variant="h6" color="text.secondary" textAlign="center" mb={8} maxWidth="md" mx="auto">
            Every component of medical billing automation, powered by advanced AI
          </Typography>
          <Grid container spacing={4}>
            {coreFeatures.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <MotionBox
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUpVariant}
                  custom={index}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: "100%",
                      border: `2px solid ${feature.highlight ? feature.color : alpha(theme.palette.divider, 0.5)}`,
                      borderRadius: 4,
                      transition: "all 0.3s",
                      position: "relative",
                      overflow: "hidden",
                      background: feature.highlight 
                        ? `linear-gradient(135deg, ${alpha(feature.color, 0.05)} 0%, ${alpha(feature.color, 0.02)} 100%)`
                        : theme.palette.background.paper,
                      "&:hover": {
                        borderColor: feature.color,
                        boxShadow: `0 20px 40px ${alpha(feature.color, 0.15)}`,
                        transform: "translateY(-4px)",
                      },
                      ...(feature.highlight && {
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: 4,
                          background: feature.gradient,
                        }
                      })
                    }}
                  >
                    {feature.highlight && (
                      <Box sx={{ position: "absolute", top: 16, right: 16 }}>
                        <Chip
                          icon={<DiamondIcon sx={{ fontSize: 16 }} />}
                          label="FEATURED"
                          size="small"
                          sx={{
                            background: feature.gradient,
                            color: "white",
                            fontWeight: 600,
                            fontSize: "0.75rem",
                          }}
                        />
                      </Box>
                    )}
                    <Stack direction="row" spacing={2} mb={3}>
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: 3,
                          background: feature.highlight ? feature.gradient : alpha(feature.color, 0.1),
                          color: feature.highlight ? "white" : feature.color,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.3s ease",
                        }}
                      >
                        {React.cloneElement(feature.icon, {
                          sx: { fontSize: 28 },
                        })}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
                          {feature.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                          {feature.description}
                        </Typography>
                      </Box>
                    </Stack>
                  </Paper>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ERA Auto-Posting Highlight Section */}
      <Box sx={{ 
        py: 12, 
        background: `linear-gradient(135deg, ${alpha("#D4AF37", 0.05)} 0%, ${alpha("#E6C547", 0.02)} 100%)`,
        position: "relative",
        overflow: "hidden",
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Chip
                  icon={<DiamondIcon sx={{ fontSize: 16 }} />}
                  label="PREMIUM FEATURE"
                  sx={{
                    background: "linear-gradient(135deg, #D4AF37 0%, #E6C547 100%)",
                    color: "white",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    mb: 3,
                  }}
                />
                <Typography variant="h3" fontWeight={700} sx={{ mb: 3 }}>
                  ERA Auto-Posting
                </Typography>
                <Typography variant="h5" color="text.secondary" sx={{ mb: 4, fontWeight: 400 }}>
                  The missing piece in most billing platforms - automated payment posting and reconciliation
                </Typography>
                <Stack spacing={3}>
                  {[
                    "Automatic ERA processing and posting",
                    "Real-time payment reconciliation",
                    "Automated adjustment handling",
                    "Instant payment tracking and reporting",
                    "Zero manual intervention required",
                  ].map((feature, index) => (
                    <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <CheckCircleIcon sx={{ color: "#D4AF37", fontSize: 24 }} />
                      <Typography variant="h6" sx={{ fontWeight: 500 }}>
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  background: "white",
                  border: `2px solid ${alpha("#D4AF37", 0.2)}`,
                  boxShadow: `0 20px 40px ${alpha("#D4AF37", 0.1)}`,
                }}
              >
                <Typography variant="h6" fontWeight={600} sx={{ mb: 3, color: "#D4AF37" }}>
                  ERA Processing Dashboard
                </Typography>
                <Grid container spacing={2}>
                  {[
                    { label: "ERAs Processed", value: "1,247", color: "#D4AF37" },
                    { label: "Payments Posted", value: "$2.1M", color: "#059669" },
                    { label: "Auto Reconciliation", value: "99.8%", color: "#0EA5E9" },
                    { label: "Time Saved", value: "156h", color: "#7C3AED" },
                  ].map((stat, index) => (
                    <Grid item xs={6} key={index}>
                      <Box sx={{ 
                        p: 2, 
                        borderRadius: 2, 
                        background: alpha(stat.color, 0.05),
                        border: `1px solid ${alpha(stat.color, 0.1)}`,
                      }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: stat.color }}>
                          {stat.value}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                          {stat.label}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Workflow Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h3" fontWeight={600} textAlign="center" mb={2}>
          Complete Revenue Cycle Workflow
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          textAlign="center"
          mb={8}
          maxWidth="md"
          mx="auto"
        >
          From AI scribe to ERA posting - every step automated with zero manual intervention
        </Typography>

        <Grid container spacing={3}>
          {workflowSteps.map((step, index) => (
            <Grid item xs={12} key={index}>
              <MotionBox
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUpVariant}
                custom={index}
              >
                <Paper
                  elevation={1}
                  sx={{
                    p: 3,
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    transition: "all 0.3s",
                    "&:hover": {
                      boxShadow: theme.shadows[4],
                      transform: "translateX(8px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      bgcolor: alpha(step.color, 0.1),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      sx={{ color: step.color }}
                    >
                      {step.step}
                    </Typography>
                  </Box>
                  <Box flex={1}>
                    <Typography variant="h6" fontWeight={600} mb={0.5}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {step.description}
                    </Typography>
                  </Box>
                </Paper>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Security & Compliance Section */}
      <Box sx={{ bgcolor: "#f9fafb", py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" fontWeight={600} mb={3}>
                Security & Compliance
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={4}>
                We understand the importance of protecting sensitive healthcare data. Our platform is built with security at its core.
              </Typography>
              <List>
                {[
                  "HIPAA compliant infrastructure",
                  "256-bit SSL encryption for data in transit",
                  "Regular security audits and penetration testing",
                  "Role-based access control (RBAC)",
                  "Comprehensive audit logging",
                  "Business Associate Agreement (BAA) available",
                ].map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>
                      <SecurityIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  bgcolor: "white",
                  p: 4,
                  borderRadius: 2,
                  boxShadow: theme.shadows[3],
                }}
              >
                <Stack spacing={3}>
                  <Box>
                    <Typography variant="h5" fontWeight={600} mb={1}>
                      Enterprise-Ready
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Trusted by healthcare organizations nationwide
                    </Typography>
                  </Box>
                  <Divider />
                  <Stack direction="row" spacing={2} flexWrap="wrap">
                    <Chip label="HIPAA" variant="outlined" />
                    <Chip label="HITECH" variant="outlined" />
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          color: "white",
          py: 10,
        }}
      >
        <Container maxWidth="md">
          <MotionBox
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scaleVariant}
            textAlign="center"
          >
            <Typography variant="h3" fontWeight={700} mb={3}>
              Ready to Transform Your Revenue Cycle?
            </Typography>
            <Typography variant="h6" mb={5} sx={{ opacity: 0.95 }}>
              See how our platform can help improve your practice's financial performance
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="contained"
                size="large"
                onClick={handleContactNavigation}
                sx={{
                  bgcolor: "white",
                  color: theme.palette.primary.main,
                  px: 4,
                  py: 1.5,
                  "&:hover": { bgcolor: alpha("#fff", 0.9) },
                }}
              >
                Schedule a Demo
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={handleContactNavigation}
                sx={{
                  borderColor: "white",
                  color: "white",
                  px: 4,
                  py: 1.5,
                  "&:hover": {
                    borderColor: "white",
                    bgcolor: alpha("#fff", 0.1),
                  },
                }}
              >
                Contact Sales
              </Button>
            </Stack>
            <Typography variant="body2" mt={3} sx={{ opacity: 0.8 }}>
              No credit card required • 30-day free trial available
            </Typography>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
};

export default MedicalBillingSolutions;