import { Box, Container, Typography, Grid, Card, CardContent, useTheme, alpha } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SpeedIcon from "@mui/icons-material/Speed";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const StatsSection = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

const stats = [
    {
      icon: <CheckCircleIcon sx={{ fontSize: 40 }} />,
      value: 96,
      suffix: "%",
      label: "First-Pass Clean Claim Rate",
      description: "Claims approved on first submission with minimal rework",
      color: theme.palette.success.main,
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      value: 40,
      suffix: "%",
      label: "Fewer Preventable Denials",
      description: "Reduction in preventable denials and rework",
      color: theme.palette.primary.main,
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      value: 80,
      suffix: "%",
      label: "Workflow Automated",
      description: "Of the claim lifecycle automated from note → cash",
      color: theme.palette.secondary.main,
    },
    {
      icon: <AttachMoneyIcon sx={{ fontSize: 40 }} />,
      value: 15,
      suffix: "hrs",
      label: "Hours Saved Per Week",
      description: "Per provider on documentation and billing tasks",
      color: theme.palette.info.main,
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
            The Numbers That Matter
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.text.secondary,
              fontWeight: 400,
              maxWidth: 700,
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Measurable outcomes for independent outpatient practices
          </Typography>
        </MotionBox>

        <Grid container spacing={4}>
        {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <MotionCard
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  background: theme.palette.background.paper,
                  border: `1px solid ${alpha(stat.color, 0.1)}`,
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    borderColor: stat.color,
                    boxShadow: `0 20px 40px ${alpha(stat.color, 0.15)}`,
                    "& .stat-icon": {
                      transform: "scale(1.1) rotate(5deg)",
                      backgroundColor: stat.color,
                      color: "white",
                    },
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: `linear-gradient(135deg, ${stat.color} 0%, ${alpha(stat.color, 0.7)} 100%)`,
                  }
                }}
              >
                <CardContent sx={{ p: 4, textAlign: "center" }}>
                  <Box
                    className="stat-icon"
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: 3,
                      backgroundColor: alpha(stat.color, 0.1),
                      color: stat.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 3,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {stat.icon}
                  </Box>

            <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 800,
                      mb: 1,
                      color: stat.color,
                      fontSize: { xs: "2rem", md: "2.5rem" },
                    }}
                  >
                    {isInView ? (
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2.5}
                  prefix={stat.prefix || ""}
                  suffix={stat.suffix || ""}
                />
              ) : (
                      "0"
              )}
            </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: theme.palette.text.primary,
                    }}
                  >
              {stat.label}
            </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      lineHeight: 1.5,
                    }}
                  >
                    {stat.description}
                  </Typography>
                </CardContent>
              </MotionCard>
          </Grid>
        ))}
      </Grid>

        {/* Bottom Message */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          sx={{ textAlign: "center", mt: 8 }}
        >
          <Typography variant="body1" sx={{ color: theme.palette.text.secondary, fontWeight: 400, maxWidth: 600, mx: "auto" }}>
            These metrics reflect real outcomes for independent PCP practices using Viscrow. Your results may vary based on practice size and workflow.
          </Typography>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default StatsSection;