import { Paper, Typography } from "@mui/material";

const UsagePurpose = () => {
  return (
    <>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "primary.main",
        }}
      >
        1. Purpose
      </Typography>

      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 2,
          backgroundColor: "background.default",
          mx: "auto",
          mb: 4,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.6,
            fontSize: "1.1rem",
          }}
        >
          Viscrow's mission is to augment the cognitive workload of clinicians
          through advanced, privacy-preserving artificial intelligence that
          integrates effortlessly with Electronic Health Records (EHRs) and
          Practice-Management Systems (PMSs).
        </Typography>

        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.6,
            fontSize: "1.1rem",
          }}
        >
          Our goal is to save time, reduce burnout, and improve documentation
          quality while keeping clinicians in full control of the final record.
        </Typography>
      </Paper>
    </>
  );
};

export default UsagePurpose;
