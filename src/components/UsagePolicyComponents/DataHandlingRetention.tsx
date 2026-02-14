import React from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";

const DataHandlingRetention: React.FC = () => {
  const theme = useTheme();

  const dataRows = [
    {
      dataType: "Audio recordings",
      storageLocation: "Ephemeral RAM",
      retentionPeriod: "Deleted immediately after transcription",
      encryption: "N/A",
    },
    {
      dataType: "Transcripts & draft notes (may contain PHI)",
      storageLocation: "Amazon DynamoDB (U.S. region)",
      retentionPeriod: "14 days, then auto-deleted",
      encryption: "At rest & in transit",
    },
    {
      dataType: "User metadata & audit logs",
      storageLocation: "Amazon RDS & S3 (U.S. region)",
      retentionPeriod: "Up to 6 years for legal compliance",
      encryption: "At rest & in transit",
    },
  ];

  const footnote =
    "Viscrow does not train or fine-tune AI models on customer data—whether raw or de-identified—without separate, explicit, written consent.";

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
        5. Data Handling & Retention
      </Typography>

      <TableContainer
        component={Paper}
        elevation={3}
        sx={{ borderRadius: 2, mb: 2 }}
      >
        <Table>
          <TableHead sx={{ backgroundColor: theme.palette.grey[100] }}>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Data type</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>
                Storage location
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>
                Retention period
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>
                Default encryption
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataRows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.dataType}</TableCell>
                <TableCell>{row.storageLocation}</TableCell>
                <TableCell>{row.retentionPeriod}</TableCell>
                <TableCell>{row.encryption}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography
        variant="body2"
        sx={{
          fontStyle: "italic",
          color: theme.palette.text.secondary,
          px: 2,
        }}
      >
        {footnote}
      </Typography>
    </Box>
  );
};

export default DataHandlingRetention;
