import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CallToAction from "../components/CallToAction";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const SolutionsPage = () => {
  return (
    <Box>
      <Box
        sx={{
          py: 8,
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Stack alignItems={"center"} justifyItems={"center"}>
            <Typography
              variant="h2"
              fontWeight="bold"
              color="primary"
              gutterBottom
            >
              Our Solutions
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Transforming Healthcare Documentation Through AI Innovation
            </Typography>
            <Stack direction="row" spacing={2} mt={4}>
              <Button
                size="large"
                component="a"
                href={`${import.meta.env.VITE_APP_URL}/register`}
                variant="contained"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try For Free
              </Button>
              <Button
                variant="outlined"
                size="large"
                color="primary"
                component={NavLink}
                to="/contact"
              >
                Book a demo
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <CallToAction />
    </Box>
  );
};

export default SolutionsPage;
