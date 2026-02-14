import { Box, Typography, Grid, Container, Paper } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MotionPaper = motion(Paper);

const steps = [
  {
    title: "Sign up",
    description: "Create your account and verify your practice.",
  },
  {
    title: "Add patients or connect EHR",
    description: "Easily sync data or input patient details manually.",
  },
  {
    title: "Use our AI Scribe",
    description: "Generate notes for medical billing automatically.",
  },
  {
    title: "Submit claims",
    description: "Send clean claims with just a few clicks.",
  },
  {
    title: "Get paid",
    description: "Track reimbursements and reduce denials.",
  },
];

const HowItWorksSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <Box ref={sectionRef} sx={{ py: 8, backgroundColor: "background.default" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          How It Works
        </Typography>
        <Typography variant="subtitle1" align="center" mb={4}>
          Simplify your revenue cycle in 5 easy steps
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {steps.map((step, idx) => {
            // Scroll-controlled range per card (smoother, not too fast)
            const start = 0.05 + idx * 0.11;
            const end = start + 0.25;

            const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
            const translateY = useTransform(scrollYProgress, [start, end], [40, 0]);

            return (
              <Grid item xs={12} sm={6} md={4} lg={2.4} key={idx}>
                <MotionPaper
                  elevation={3}
                  sx={{ p: 3, height: "100%" }}
                  style={{ opacity, y: translateY }}
                >
                  <Typography
                    variant="h6"
                    color="primary"
                    fontWeight="bold"
                    gutterBottom
                  >
                    {step.title}
                  </Typography>
                  <Typography variant="body2">{step.description}</Typography>
                </MotionPaper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorksSection;
