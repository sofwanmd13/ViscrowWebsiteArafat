import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import SolutionsPage from "./pages/SolutionsPage";
import ContactPage from "./pages/ContactPage";
import ROICalculator from "./pages/ROICalculator";
import Layout from "./components/Layout";
import {
  closeSnackbar,
  MaterialDesignContent,
  SnackbarProvider,
} from "notistack";
import styled from "@mui/material/styles/styled";
import { lightTheme } from "./utils/appThemes";
import Button from "@mui/material/Button";
import PricingPage from "./pages/PricingPage";
import ScrollToTop from "./components/ScrollToTop";
import UsagePolicyPage from "./pages/UsagePolicyPage";
import { Global } from "@emotion/react";
import MedicalBillingSolutions from "./pages/MedicalBillingSolutions";
import { ThemeProvider, CssBaseline } from "@mui/material";


// blog imports
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";

function App() {
  const theme = lightTheme;

  const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
    "&.notistack-MuiContent": {
      borderRadius: theme.spacing(1),
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
    },
    "&.notistack-MuiContent-error": {
      color: theme.palette.error.main,
    },
  }));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop />

        {/* Global keyframe animation for gradient */}
        {/*<Global
          styles={`
            @keyframes gradientAnimation {
              0% {
                transform: translate(0%, 0%) scale(1);
              }
              50% {
                transform: translate(-5%, -5%) scale(1.05);
              }
              100% {
                transform: translate(0%, 0%) scale(1);
              }
            }
          `}
        />*/}

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="terms-of-use" element={<TermsOfUsePage />} />
            <Route path="usage-policy" element={<UsagePolicyPage />} />
            <Route path="solutions" element={<SolutionsPage />} />
            <Route path="roi-calculator" element={<ROICalculator />} />
            <Route
              path="medical-billing-solutions"
              element={<MedicalBillingSolutions />}
            />

            {/* blog routes */}
            <Route path="blog" element={<BlogIndex />} />
            <Route path="blog/:slug" element={<BlogPost />} />
          </Route>
        </Routes>

        <SnackbarProvider
          hideIconVariant
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          style={{ fontFamily: "Reddit Sans, sans-serif" }}
          maxSnack={1}
          Components={{
            default: StyledMaterialDesignContent,
            success: StyledMaterialDesignContent,
            error: StyledMaterialDesignContent,
          }}
          action={(snackbarId) => (
            <Button
              onClick={() => {
                closeSnackbar(snackbarId);
              }}
            >
              Close
            </Button>
          )}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
