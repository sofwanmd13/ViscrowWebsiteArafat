import { Box, Typography, Container } from "@mui/material";

export default function Testimonials() {
  return (
    <Box sx={{ py: 8, px: 2, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Typography
          variant="h6"
          color="primary"
          textAlign="center"
          gutterBottom
        >
          Testimonials
        </Typography>
        <Typography
          variant="h3"
          textAlign="center"
          fontWeight="bold"
          sx={{ mb: 4 }}
        >
          What Everyone Is Raving About
        </Typography>
      </Container>
      <Container
        maxWidth="lg"
        sx={{
          borderRadius: 2,
          pt: 4,
          pb: 8,
        }}
      >
        <Box
          component="iframe"
          src="https://www.youtube.com/embed/DtquYo2rB4I"
          sx={{
            width: "100%",
            aspectRatio: "16/9", // This maintains the 16:9 aspect ratio
            border: "none",
            borderRadius: 2,
            boxShadow: 3,
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Container>
    </Box>
  );
}
