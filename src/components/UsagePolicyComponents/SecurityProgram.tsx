import React from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  useTheme,
  Chip,
  ListItemIcon,
} from "@mui/material";
import { Security, Lock, VerifiedUser, Assessment } from "@mui/icons-material";

const SecurityProgram: React.FC = () => {
  const theme = useTheme();

  const securityFeatures = [
    {
      text: "TLS 1.2+ encryption in transit and AES-256 encryption at rest",
      icon: <Lock color="primary" />,
    },
    {
      text: "role-based access controls with multi-factor authentication",
      icon: <VerifiedUser color="primary" />,
    },
    {
      text: "continuous vulnerability scanning and patch management",
      icon: <Security color="primary" />,
    },
    {
      text: "annual HIPAA Security-Rule risk analysis",
      icon: <Assessment color="primary" />,
    },
  ];

  return (
    <Box sx={{ my: 4 }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: theme.palette.primary.main,
          mb: 3,
        }}
      >
        6. Security Programme
      </Typography>

      <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="body1" paragraph>
          Viscrow maintains a written information-security programme that
          includes:
        </Typography>

        <List disablePadding>
          {securityFeatures.map((feature, index) => (
            <ListItem key={index} sx={{ py: 0.5, pl: 0 }}>
              <ListItemIcon sx={{ minWidth: 36 }}>{feature.icon}</ListItemIcon>
              <ListItemText
                primary={feature.text}
                primaryTypographyProps={{ variant: "body1" }}
              />
            </ListItem>
          ))}
        </List>

        <Box
          sx={{
            mt: 3,
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          <Chip
            label="SOC 2"
            variant="outlined"
            size="small"
            sx={{ borderColor: theme.palette.success.main }}
          />
          <Chip
            label="HITRUST"
            variant="outlined"
            size="small"
            sx={{ borderColor: theme.palette.success.main }}
          />
        </Box>

        <Typography variant="body1" sx={{ mt: 2 }}>
          We continually benchmark these controls against leading
          healthcare-security frameworks, and will pursue formal certification
          audits as business needs and customer requirements dictate. Current
          audit status is available on request.
        </Typography>
      </Paper>
    </Box>
  );
};

export default SecurityProgram;
