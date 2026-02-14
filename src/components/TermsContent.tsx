import { Box, Typography } from "@mui/material";

export default function TermsContent() {
  return (
    <Box sx={{ p: 2 }}>
      <section id="accounts">
        <Typography variant="h5" gutterBottom>
          1. Accounts and registration
        </Typography>
      </section>

      <section id="accounts-1">
        <Typography variant="h6">1.1 Accounts</Typography>
        <Typography paragraph>
          To access Heidi, you must register for, and hold, an account...
        </Typography>
      </section>

      <section id="accounts-2">
        <Typography variant="h6">1.2 Registration process</Typography>
        <Typography paragraph>
          As part of registering for, and activating, your Account...
        </Typography>
      </section>

      <section id="accounts-3">
        <Typography variant="h6">1.3 Account security</Typography>
        <Typography paragraph>
          When you register and activate your Account...
        </Typography>
      </section>

      {/* Add remaining sections here */}
    </Box>
  );
}
