import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Box from "@mui/material/Box";

const Layout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        bgcolor: "#f4f7fb", // ✅ soft global background instead of hard white
      }}
    >
      <Navbar />

      {/* ✅ no extra padding here; hero handles spacing */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
};

export default Layout;
