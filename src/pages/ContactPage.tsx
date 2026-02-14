import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const ContactPage = () => {
  return (
    <Box sx={{ backgroundColor: "background.default", py: 8 }}>
      <Container maxWidth="lg">
        <Stack alignItems="center" justifyContent="center" spacing={4}>
          <Typography
            component="h1"
            variant="h3"
            fontWeight="bold"
            color="primary"
            gutterBottom
          >
            Contact
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Transforming Healthcare Documentation Through AI Innovation
          </Typography>
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/nVIHnSOK83mO4U5dTTyg"
            style={{
              width: "100%",
              height: "900px", // Adjust height as needed
              border: "none", // Remove default border
            }}
            scrolling="no"
            title="Contact Form"
          ></iframe>
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactPage;
