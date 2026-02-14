import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { NavLink } from "react-router-dom";
import { useMemo, memo } from "react";

const PricingPage = () => {
  const theme = useTheme();

  const starterIncluded = useMemo(() => [
    "Automated progress notes",
    "Custom note templates",
    "Smart treatment plans",
    "Post session suggestions",
  ], []);

  const starterExcluded = useMemo(() => [
    "Medical Billing platform",
    "Claim submission & reimbursement tracking",
    "Dedicated support & integration",
  ], []);

  const enterpriseFeatures = useMemo(() => [
    "Unlimited use of our AI Scribe",
    "Medical Billing platform",
    "HIPAA-compliant claim submission",
    "Reimbursement tracking and reporting",
    "EHR and EMR integration",
    "Dedicated support and onboarding",
  ], []);

  const cardStyle = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: "16px",
    px: 3,
    py: 4,
    transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out",
    willChange: "transform, box-shadow",
    backfaceVisibility: "hidden",
    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow: theme.shadows[12],
    },
  };

  const listItemHoverStyle = {
    transition: "color 0.2s ease, transform 0.2s ease",
    willChange: "transform, color",
    "&:hover": {
      color: theme.palette.primary.main,
      transform: "translateX(4px)",
    },
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 10, md: 14 },
      }}
    >
      {/* Background animation with better GPU performance */}
      <Box
        component="div"
        sx={{
          position: "absolute",
          top: "-30%",
          left: "-20%",
          width: "160%",
          height: "160%",
          background: "radial-gradient(circle at 30% 30%, #D1FAE5, transparent 40%), radial-gradient(circle at 70% 70%, #A7F3D0, transparent 40%)",
          // filter: "blur(100px)", // optional: replace with opacity if performance is still bad
          opacity: 0.35,
          transform: "translate3d(0, 0, 0)",
          willChange: "transform",
          animation: "gradientAnimation 18s ease-in-out infinite",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h3"
          align="center"
          fontWeight={700}
          color="primary"
          gutterBottom
        >
          Plans built for your practice
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ mb: 10, color: "text.secondary", maxWidth: 720, mx: "auto" }}
        >
          Pick the plan that fits your clinic. Start for free or scale with full support.
        </Typography>

        <Grid container spacing={6} justifyContent="center">
          {/* Starter Card */}
          <Grid item xs={12} sm={10} md={5}>
            <Card elevation={3} sx={cardStyle}>
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Starter (Scribe Only)
                </Typography>
                <Typography
                  variant="h3"
                  color="primary"
                  fontWeight={700}
                  sx={{ mb: 1 }}
                >
                  Free
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  10 Scribe sessions per month
                </Typography>

                <Box mt={4}>
                  <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                    What's included
                  </Typography>
                  <List dense>
                    {starterIncluded.map((text) => (
                      <ListItem key={text} sx={{ py: 0.6, ...listItemHoverStyle }}>
                        <ListItemIcon sx={{ minWidth: 30, color: "primary.main" }}>
                          <CheckCircleIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                          primary={text}
                          primaryTypographyProps={{ fontSize: "0.95rem" }}
                        />
                      </ListItem>
                    ))}
                    {starterExcluded.map((text) => (
                      <ListItem key={text} sx={{ py: 0.6, ...listItemHoverStyle }}>
                        <ListItemIcon sx={{ minWidth: 30, color: "text.disabled" }}>
                          <CancelIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                          primary={text}
                          primaryTypographyProps={{
                            color: "text.secondary",
                            fontSize: "0.95rem",
                          }}
                        />
                      </ListItem>
                    ))}
                    <ListItem sx={{ pt: 1 }}>
                      <ListItemText
                        primary="Billing not included"
                        primaryTypographyProps={{
                          variant: "body2",
                          color: "text.disabled",
                          fontStyle: "italic",
                        }}
                      />
                    </ListItem>
                  </List>
                </Box>
              </CardContent>
              <Box pt={2}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  href={`${import.meta.env.VITE_APP_URL}/signup`}
                  target="_blank"
                  sx={{
                    textTransform: "none",
                    transition: "all 0.3s ease",
                    fontWeight: 600,
                  }}
                >
                  Get started
                </Button>
              </Box>
            </Card>
          </Grid>

          {/* Enterprise Card */}
          <Grid item xs={12} sm={10} md={5}>
            <Card elevation={6} sx={cardStyle}>
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Enterprise
                </Typography>
                <Typography
                  variant="h4"
                  color="primary"
                  fontWeight={700}
                  sx={{ mb: 1 }}
                >
                  Contact us
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Full access to Scribe and Billing with white glove onboarding and support.
                </Typography>

                <Box mt={4}>
                  <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                    Everything in Starter, plus:
                  </Typography>
                  <List dense>
                    {enterpriseFeatures.map((text) => (
                      <ListItem key={text} sx={{ py: 0.6, ...listItemHoverStyle }}>
                        <ListItemIcon sx={{ minWidth: 30, color: "primary.main" }}>
                          <CheckCircleIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                          primary={text}
                          primaryTypographyProps={{ fontSize: "0.95rem" }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </CardContent>
              <Box pt={2}>
                <Button
                  fullWidth
                  variant="outlined"
                  color="primary"
                  size="large"
                  component={NavLink}
                  to="/contact"
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(0, 128, 96, 0.04)",
                    },
                  }}
                >
                  Schedule a call
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// ✅ Prevents unnecessary re-renders
export default memo(PricingPage);
