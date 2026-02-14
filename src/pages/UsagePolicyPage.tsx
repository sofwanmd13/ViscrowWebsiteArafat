import { Container, Typography } from "@mui/material";
import UsageSummary from "../components/UsagePolicyComponents/UsageSummary";
import AIFunctionalityTable from "../components/UsagePolicyComponents/AIFunctionalityTable";
import Limitations from "../components/UsagePolicyComponents/Limitations";
import ProhibitedUses from "../components/UsagePolicyComponents/ProhibitedUses";
import DataHandlingRetention from "../components/UsagePolicyComponents/DataHandlingRetention";
import SecurityProgram from "../components/UsagePolicyComponents/SecurityProgram";
import RegulatoryCompliance from "../components/UsagePolicyComponents/RegulatoryCompliance";
import PolicySections from "../components/UsagePolicyComponents/PolicySections";
import UsagePurpose from "../components/UsagePolicyComponents/UsagePurpose";

export default function UsagePolicyPage() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Usage Policy
      </Typography>
      <UsageSummary />
      <UsagePurpose />
      <AIFunctionalityTable />
      <Limitations />
      <ProhibitedUses />
      <DataHandlingRetention />
      <SecurityProgram />
      <RegulatoryCompliance />
      <PolicySections />
    </Container>
  );
}
