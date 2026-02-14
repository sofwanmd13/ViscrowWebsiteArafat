import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Typography,
  useTheme,
  Box,
} from "@mui/material";

type Feature = {
  name: string;
  description: string;
  status: string;
};

const AIFunctionalityTable: React.FC = () => {
  const theme = useTheme();

  const features: Feature[] = [
    {
      name: "Audio capture & transcription",
      description:
        "Records user-initiated audio, converts speech to text, then deletes the raw audio.",
      status: "Production",
    },
    {
      name: "Draft note generation",
      description:
        "Produces structured SOAP / H&P notes or templates based on the transcript and user prompts.",
      status: "Production",
    },
    {
      name: "Suggestive analytics",
      description:
        "Surfaces possible diagnoses, codes, or medical concepts with probability scores for reference only.",
      status: "On by default; user-configurable",
    },
    {
      name: "AI billing support",
      description:
        "Generates suggested CPT/HCPCS codes, modifiers, and draft superbills based on encounter content. Requires user verification before submission.",
      status: "Coming Soon (Beta flag)",
    },
    {
      name: "Language translation",
      description:
        "Creates encounter summaries in a language different from the encounter language.",
      status: "Beta",
    },
    {
      name: "Template insertion & macros",
      description:
        "Lets practitioners build, store, and insert custom templates or text snippets.",
      status: "Production",
    },
  ];

  const getStatusColor = (status: string) => {
    if (status.includes("Production")) return "success";
    if (status.includes("Beta")) return "warning";
    if (status.includes("Coming Soon")) return "info";
    return "default";
  };

  return (
    <Box sx={{ my: 4 }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
      >
        2. AI Functionality
      </Typography>

      <TableContainer component={Paper} elevation={3} sx={{ borderRadius: 2 }}>
        <Table sx={{ minWidth: 650 }} aria-label="AI functionality table">
          <TableHead sx={{ backgroundColor: theme.palette.grey[100] }}>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                Feature
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                Description
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                Current status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {features.map((feature, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontWeight: "medium" }}
                >
                  {feature.name}
                </TableCell>
                <TableCell>{feature.description}</TableCell>
                <TableCell>
                  <Chip
                    label={feature.status}
                    color={getStatusColor(feature.status)}
                    variant={
                      feature.status.includes("user-configurable")
                        ? "outlined"
                        : "filled"
                    }
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AIFunctionalityTable;
