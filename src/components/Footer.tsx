import { Box, Typography, IconButton } from "@mui/material";
import { LinkedIn, Twitter, Facebook } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        textAlign: "center",
        pt: 4, // Padding on top and bottom
        pb: 6,
      }}
    >
      <Typography color="white" variant="body2" sx={{ mb: 1 }}>
        © 2024 Viscrow Health Inc. All rights reserved.
      </Typography>
      <Box>
        <IconButton
          component="a"
          href="https://www.linkedin.com/company/viscrowhealth/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          sx={{ color: "white" }}
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          component="a"
          aria-label="Twitter"
          href="https://x.com/ViscrowHealth"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "white" }}
        >
          <Twitter />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.facebook.com/profile.php?id=61571357776785"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          sx={{ color: "white" }}
        >
          <Facebook />
        </IconButton>
      </Box>
      <Box sx={{ mt: 1 }} display={"flex"} justifyContent={"center"} gap={2}>
        <Typography
          component={NavLink}
          to={"/privacy-policy"}
          variant="body2"
          sx={{ color: "white", textDecoration: "none" }}
        >
          Privacy Policy
        </Typography>
        <Typography
          component={NavLink}
          to={"/terms-of-use"}
          variant="body2"
          sx={{ color: "white", textDecoration: "none" }}
        >
          Terms of Use
        </Typography>

        <Typography
          component={NavLink}
          to={"/usage-policy"}
          variant="body2"
          sx={{ color: "white", textDecoration: "none" }}
        >
          Usage Policy
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
