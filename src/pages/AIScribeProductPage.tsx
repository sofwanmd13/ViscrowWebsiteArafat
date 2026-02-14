import { Box, Container, Typography } from "@mui/material";
import Testimonials from "../components/Testimonials";

const AIScribeProductPage = () => {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          component="h1"
          variant="h3"
          fontWeight="bold"
          color="primary"
          textAlign="center"
          gutterBottom
        >
          Learn More About Our AI Scribe
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          textAlign="center"
          mb={6}
        >
          Discover how Viscrow's AI Scribe tools and automation features can help streamline documentation and improve your workflow.
        </Typography>
      </Container>

      <Testimonials />
    </Box>
  );
};

export default AIScribeProductPage;
