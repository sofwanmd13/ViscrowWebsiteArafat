import { Box, Typography, Container, Grid2 as Grid } from "@mui/material";
import ShieldIcon from "@mui/icons-material/Security"; // Replace with actual icons
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import DeleteIcon from "@mui/icons-material/Delete";

const securityFeatures = [
  {
    title: "HIPAA Compliant",
    description:
      "Full HIPAA compliance to ensure patient health information remains protected and confidential. Built with healthcare security standards from the ground up.",
    icon: <ShieldIcon fontSize="large" color="primary" />,
  },
  {
    title: "Enterprise-Grade Security",
    description:
      "Bank-level encryption for all data during transmission and at rest. Your practice data is protected by the highest standards of security and privacy.",
    icon: <VerifiedUserIcon fontSize="large" color="primary" />,
  },
  {
    title: "Transparent & Trustworthy",
    description:
      "Clear audit trails and compliance reporting. We're transparent about how we handle your data, because trust matters in healthcare.",
    icon: <DeleteIcon fontSize="large" color="primary" />,
  },
];

const SecurityFeatures = () => {
  return (
    <Box sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <Typography
          component={"h2"}
          variant="h3"
          align="center"
          fontWeight={700}
          gutterBottom
          sx={{ color: "text.primary" }}
        >
          Security & Compliance You Can Trust
        </Typography>
        <Typography
          component={"h3"}
          variant="h6"
          align="center"
          sx={{ marginBottom: 4, maxWidth: "700px", mx: "auto", color: "text.secondary", fontWeight: 400, lineHeight: 1.6 }}
        >
          Your practice data is protected by enterprise-grade security and full HIPAA compliance. We take healthcare data protection seriously.
        </Typography>
        <Grid container spacing={4}>
          {securityFeatures.map((feature, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
              <Box sx={{ marginBottom: 2 }}>{feature.icon}</Box>
              <Typography variant="h6" fontWeight={600} gutterBottom sx={{ color: "text.primary" }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                {feature.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SecurityFeatures;
