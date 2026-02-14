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
import { GppGood, Public } from "@mui/icons-material";

const RegulatoryCompliance: React.FC = () => {
  const theme = useTheme();

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
        7. Regulatory Compliance
      </Typography>

      <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        {/* HIPAA Section */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <GppGood color="primary" sx={{ mr: 1.5 }} />
            <Typography
              variant="h6"
              component="h3"
              sx={{ fontWeight: "medium" }}
            >
              7.1 HIPAA & Business-Associate Agreements
            </Typography>
          </Box>

          <Typography variant="body1" paragraph sx={{ pl: 4.5 }}>
            If you or your organisation is a Covered Entity or Business
            Associate under HIPAA:
          </Typography>

          <List disablePadding sx={{ pl: 4.5 }}>
            <ListItem disableGutters sx={{ py: 0.5 }}>
              <ListItemText
                primary="a single organisation-level Business Associate Agreement (BAA) must be executed during onboarding"
                primaryTypographyProps={{ variant: "body1" }}
              />
            </ListItem>
            <ListItem disableGutters sx={{ py: 0.5 }}>
              <ListItemText
                primary="individual users under that organisation are covered by the signed BAA"
                primaryTypographyProps={{ variant: "body1" }}
              />
            </ListItem>
            <ListItem disableGutters sx={{ py: 0.5 }}>
              <ListItemText
                primary={
                  <>
                    Viscrow will notify the organisation's Security Officer of
                    any Suspected or Confirmed Breach of Unsecured PHI without
                    unreasonable delay and no later than sixty (60) days after
                    discovery
                  </>
                }
                primaryTypographyProps={{ variant: "body1" }}
              />
            </ListItem>
          </List>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Global Compliance Section */}
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Public color="primary" sx={{ mr: 1.5 }} />
            <Typography
              variant="h6"
              component="h3"
              sx={{ fontWeight: "medium" }}
            >
              7.2 Global Users & Data Localisation
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ pl: 4.5 }}>
            The Platform is designed to facilitate compliance with GDPR, UK DPA
            2018, PIPEDA, LGPD, and similar regimes; however, each user is
            responsible for ensuring that their use of the Platform complies
            with all local laws, including data-protection, localisation, and
            professional-licensing requirements.
          </Typography>

          <Box
            sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2, pl: 4.5 }}
          >
            {["GDPR", "UK DPA 2018", "PIPEDA", "LGPD"].map((regulation) => (
              <Typography
                key={regulation}
                variant="body2"
                component="span"
                sx={{
                  px: 1.5,
                  py: 0.5,
                  bgcolor: theme.palette.grey[100],
                  borderRadius: 1,
                  fontWeight: "medium",
                }}
              >
                {regulation}
              </Typography>
            ))}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default RegulatoryCompliance;
