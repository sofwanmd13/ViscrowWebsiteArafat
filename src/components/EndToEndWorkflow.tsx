import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  useTheme,
  alpha,
  Stack,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MicIcon from "@mui/icons-material/Mic";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import SendIcon from "@mui/icons-material/Send";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PaymentIcon from "@mui/icons-material/Payment";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const EndToEndWorkflow = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const workflowSteps = [
    {
      title: "Capture & Documentation",
      description: "Ingests notes or transcripts from physician–patient encounters",
      icon: <MicIcon sx={{ fontSize: 32 }} />,
      color: theme.palette.primary.main,
      details: [
        "Ingests notes or transcripts from physician–patient encounters",
        "Produces structured documentation usable for billing and the chart",
        "Works with common EHRs (Athenahealth, eClinicalWorks, Epic, etc.)",
        "Optimized for Primary Care visit patterns",
      ],
      automation: "Automated",
    },
    {
      title: "AI Coding & Charge Capture",
      description: "Suggests/generates CPT, ICD-10, HCPCS, modifiers based on documentation",
      icon: <AutoFixHighIcon sx={{ fontSize: 32 }} />,
      color: theme.palette.secondary.main,
      details: [
        "Generates compliant CPT, ICD-10, and HCPCS codes + modifiers",
        "Applies payer-specific rules and medical necessity criteria",
        "Handles E/M logic and common PCP visit patterns",
        "Supports annual + problem visits, chronic disease management, acute visits, follow-ups",
      ],
      automation: "AI-Powered",
    },
    {
      title: "Claim Scrubbing & Submission",
      description: "Runs rules engine, payer edits, and LCD/NCD logic to scrub the claim",
      icon: <SendIcon sx={{ fontSize: 32 }} />,
      color: theme.palette.info.main,
      details: [
        "Runs Viscrow's rules engine: NCCI, LCD/NCD, payer edits, practice-specific rules",
        "Flags missing info, inconsistencies, bundling issues, and modifier problems",
        "Submits clean claims through the clearinghouse",
        "High first-pass clean claim rate",
      ],
      automation: "Automated",
    },
    {
      title: "Claim Status & ERA Auto-Posting",
      description: "Continuously monitors payer responses and auto-posts ERAs/EOBs",
      icon: <TrackChangesIcon sx={{ fontSize: 32 }} />,
      color: theme.palette.success.main,
      details: [
        "Continuously monitors payer responses",
        "Auto-posts ERAs/EOBs into the billing system",
        "Reconciles payments, contractual adjustments, write-offs, and patient responsibility",
        "Real-time payment tracking and reconciliation",
      ],
      automation: "Automated",
    },
    {
      title: "Denial Management & A/R Follow-Up",
      description: "Identifies denials, surfaces root causes, and builds prioritized worklists",
      icon: <AssignmentIcon sx={{ fontSize: 32 }} />,
      color: theme.palette.warning.main,
      details: [
        "Identifies denials, underpayments, and delays",
        "Surfaces root causes and suggested fixes / appeal language",
        "Builds prioritized worklists for staff (only where human involvement is needed)",
        "Reduces days in A/R and manual follow-up burden",
      ],
      automation: "AI-Assisted",
    },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isInView && !isPlaying) {
      setIsPlaying(true);
      interval = setInterval(() => {
        setActiveStep((prev) => {
          if (prev >= workflowSteps.length - 1) {
            return 0; // Loop back to start
          }
          return prev + 1;
        });
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isInView, isPlaying, workflowSteps.length]);

  return (
    <Box
      ref={ref}
      sx={{
        py: 12,
        /*background: `
          linear-gradient(135deg, 
            ${alpha(theme.palette.primary.main, 0.02)} 0%, 
            ${alpha(theme.palette.secondary.main, 0.02)} 50%,
            ${alpha(theme.palette.info.main, 0.02)} 100%
          )
        `,*/
        background: "transparent",
      }}
    >
      <Container maxWidth="lg">
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
            The Complete Revenue Cycle Pipeline
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.text.secondary,
              fontWeight: 400,
              maxWidth: 800,
              mx: "auto",
              mb: 4,
              lineHeight: 1.6,
            }}
          >
            From clinical note to paid claim. Each module works together to automate the full claim lifecycle, not just documentation.
          </Typography>
        </MotionBox>

        {/* Workflow Visualization */}
        <Grid container spacing={6}>
          {/* Steps List */}
          <Grid item xs={12} md={5}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 4, color: theme.palette.text.primary }}>
              Product Modules
            </Typography>
            <Stack spacing={2}>
              {workflowSteps.map((step, index) => (
                <MotionCard
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setActiveStep(index)}
                  sx={{
                    cursor: "pointer",
                    borderRadius: 3,
                    border: `2px solid ${
                      activeStep === index
                        ? step.color
                        : alpha(theme.palette.grey[300], 0.5)
                    }`,
                    background: activeStep === index
                      ? alpha(step.color, 0.05)
                      : theme.palette.background.paper,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: step.color,
                      backgroundColor: alpha(step.color, 0.05),
                      transform: "translateX(8px)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          background: activeStep === index ? step.color : alpha(step.color, 0.1),
                          color: activeStep === index ? "white" : step.color,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.3s ease",
                        }}
                      >
                        {step.icon}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                          {step.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                          {step.description}
                        </Typography>
                        <Chip
                          label={step.automation}
                          size="small"
                          sx={{
                            mt: 1,
                            backgroundColor: alpha(step.color, 0.1),
                            color: step.color,
                            fontWeight: 600,
                            fontSize: "0.75rem",
                          }}
                        />
                      </Box>
                    </Stack>
                  </CardContent>
                </MotionCard>
              ))}
            </Stack>
          </Grid>

          {/* Step Details */}
          <Grid item xs={12} md={7}>
            <MotionBox
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                sx={{
                  borderRadius: 4,
                  background: `linear-gradient(135deg, 
                    ${alpha(workflowSteps[activeStep].color, 0.05)} 0%, 
                    ${alpha(workflowSteps[activeStep].color, 0.02)} 100%
                  )`,
                  border: `1px solid ${alpha(workflowSteps[activeStep].color, 0.1)}`,
                  boxShadow: `0 20px 40px ${alpha(workflowSteps[activeStep].color, 0.1)}`,
                }}
              >
                <CardContent sx={{ p: 6 }}>
                  <Stack direction="row" spacing={3} alignItems="center" sx={{ mb: 4 }}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: 3,
                        background: workflowSteps[activeStep].color,
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: `0 8px 32px ${alpha(workflowSteps[activeStep].color, 0.3)}`,
                      }}
                    >
                      {workflowSteps[activeStep].icon}
                    </Box>
                    <Box>
                      <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                        {workflowSteps[activeStep].title}
                      </Typography>
                      <Typography variant="h6" sx={{ color: theme.palette.text.secondary, fontWeight: 400 }}>
                        {workflowSteps[activeStep].description}
                      </Typography>
                    </Box>
                  </Stack>

                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                    Key Features:
                  </Typography>
                  <Grid container spacing={2}>
                    {workflowSteps[activeStep].details.map((detail, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            p: 2,
                            borderRadius: 2,
                            backgroundColor: alpha(workflowSteps[activeStep].color, 0.05),
                            border: `1px solid ${alpha(workflowSteps[activeStep].color, 0.1)}`,
                          }}
                        >
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              backgroundColor: workflowSteps[activeStep].color,
                              mr: 2,
                            }}
                          />
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {detail}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>

                  {/* Progress Indicator */}
                  <Box sx={{ mt: 4, p: 3, backgroundColor: alpha(theme.palette.primary.main, 0.05), borderRadius: 2 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Step {activeStep + 1} of {workflowSteps.length}
                      </Typography>
                      <Chip
                        label={workflowSteps[activeStep].automation}
                        sx={{
                          backgroundColor: workflowSteps[activeStep].color,
                          color: "white",
                          fontWeight: 600,
                        }}
                      />
                    </Stack>
                    <Box
                      sx={{
                        width: "100%",
                        height: 8,
                        backgroundColor: alpha(theme.palette.grey[300], 0.3),
                        borderRadius: 4,
                        mt: 2,
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        sx={{
                          width: `${((activeStep + 1) / workflowSteps.length) * 100}%`,
                          height: "100%",
                          background: `linear-gradient(135deg, ${workflowSteps[activeStep].color} 0%, ${alpha(workflowSteps[activeStep].color, 0.7)} 100%)`,
                          borderRadius: 4,
                          transition: "width 0.5s ease",
                        }}
                      />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default EndToEndWorkflow;
