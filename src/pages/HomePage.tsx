import { Box } from "@mui/material";
import HeroSection from "../components/HeroSection";
import CallToAction from "../components/CallToAction";
import SecurityFeatures from "../components/SecurityFeatures";
import StatsSection from "../components/StatsSection";
import EndToEndWorkflow from "../components/EndToEndWorkflow";
import BillingFeatures from "../components/BillingFeatures";

const HomePage = () => {
  return (
    <Box>
      <HeroSection />
      <EndToEndWorkflow />
      <BillingFeatures />
      <StatsSection />
      <SecurityFeatures />
      <CallToAction />
    </Box>
  );
};

export default HomePage;