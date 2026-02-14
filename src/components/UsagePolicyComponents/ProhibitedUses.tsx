import React from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  useTheme,
  Divider,
} from "@mui/material";

const ProhibitedUses: React.FC = () => {
  const theme = useTheme();

  const prohibitedUses = [
    "Provide fabricated, deceptive, or unauthorised patient data.",
    "Rely on Platform output as the sole basis for diagnosis, treatment, or prescribing.",
    "Prompt the Platform to deliver prescriptive medical advice, clinical orders, or dosing instructions.",
    "Reverse-engineer, scrape, or extract source code, datasets, or model weights.",
    "Circumvent or disable security controls, rate limits, or audit logs.",
    "Use the Platform for any illegal, harmful, defamatory, or discriminatory purpose.",
  ];

  const consequences =
    "Violations constitute a material breach and may result in immediate suspension or termination, deletion of data, and—where legally permissible—assessment of reasonable costs incurred by Viscrow.";

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
        4. Prohibited Uses
      </Typography>

      <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        <Typography
          variant="body1"
          paragraph
          sx={{ fontWeight: "medium", mb: 2 }}
        >
          You must not:
        </Typography>

        <List disablePadding sx={{ mb: 2 }}>
          {prohibitedUses.map((item, index) => (
            <ListItem key={index} disableGutters sx={{ py: 0.5, pl: 2 }}>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <Box component="span" sx={{ fontWeight: "medium", mr: 1 }}>
                      {index + 1}.
                    </Box>
                    {item}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 2 }} />

        <Typography
          variant="body1"
          sx={{ fontStyle: "italic", color: theme.palette.error.main }}
        >
          {consequences}
        </Typography>
      </Paper>
    </Box>
  );
};

export default ProhibitedUses;
