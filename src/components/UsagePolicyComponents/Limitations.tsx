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

const Limitations: React.FC = () => {
  const theme = useTheme();

  const limitations = [
    {
      title: "No Replacement for Professional Medical Advice",
      content:
        "Platform outputs are not medical advice, definitive diagnoses, treatment recommendations, prescriptions, or patient-specific care plans.",
    },
    {
      title: "Not a Medical Device",
      content:
        "The Platform is supplied solely as documentation support and is not cleared, approved, or otherwise regulated as Software-as-a-Medical-Device (SaMD) by any authority.",
    },
    {
      title: "Clinician Responsibility & Verification",
      content: [
        "Review, verify, edit, and approve every note, code, or suggestion before it is stored in, copied to, or pushed into any EHR or downstream system;",
        "Corroborate any AI suggestion through independent clinical evaluation; and",
        "Comply with all laws, professional-licence requirements, and institutional policies governing clinical documentation.",
      ],
    },
    {
      title: "Service Description Not Guaranteed",
      content:
        "Features, models, and interfaces may evolve rapidly; descriptions herein are illustrative, not contractual guarantees.",
    },
    {
      title: "Billing Disclaimer",
      content:
        "Code suggestions, charge-capture outputs, or reimbursement estimates are informational only and do not guarantee payer acceptance or compliance with federal or commercial-payer rules. The clinician or billing staff remains solely responsible for final code selection, modifier usage, medical-necessity documentation, and audit defence.",
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
        3. Limitations
      </Typography>

      <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        <List disablePadding>
          {limitations.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem alignItems="flex-start" sx={{ py: 2, pl: 0 }}>
                <ListItemText
                  primary={
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontWeight: "medium",
                        mb: 1,
                      }}
                    >
                      {index + 1}. {item.title}
                    </Typography>
                  }
                  secondary={
                    typeof item.content === "string" ? (
                      <Typography variant="body1" component="p" sx={{ pl: 3 }}>
                        {item.content}
                      </Typography>
                    ) : (
                      <List disablePadding sx={{ pl: 3 }}>
                        {item.content.map((point, i) => (
                          <ListItem
                            key={i}
                            disableGutters
                            sx={{ py: 0.5, pl: 0 }}
                          >
                            <ListItemText
                              primary={
                                <Typography variant="body1">
                                  • {point}
                                </Typography>
                              }
                            />
                          </ListItem>
                        ))}
                      </List>
                    )
                  }
                  secondaryTypographyProps={{ component: "div" }}
                />
              </ListItem>
              {index < limitations.length - 1 && <Divider sx={{ my: 1 }} />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Limitations;
