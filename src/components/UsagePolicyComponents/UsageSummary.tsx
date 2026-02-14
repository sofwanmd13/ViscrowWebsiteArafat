import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const UsageSummary = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="body1">
        This Usage Policy sets out the terms and conditions governing the
        acceptable use of the software-as-a-service platform developed and
        operated by Viscrow Health Inc. together with its subsidiaries and
        affiliates (collectively, “Viscrow Health Group”). The platform—marketed
        today as <strong>Viscrow Scribe</strong> and including any future
        modules, mobile applications, APIs, or add-ons (the{" "}
        <strong>“Platform”</strong>)—is designed to support the delivery of
        health services by providing:
      </Typography>

      <List sx={{ pl: 4 }}>
        <ListItem>
          <ListItemIcon>
            <CheckIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <>
                <strong>clinical-workflow management</strong> and structured
                documentation tools
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <>
                <strong>speech-to-text transcription</strong> of recorded
                encounters
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <>
                <strong>AI-assisted drafting</strong> of clinical notes,
                templates, and macros
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <>
                <strong>optional suggestive analytics</strong> such as coded
                concepts or possible diagnoses
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <>
                <strong>AI-enhanced charge capture & billing support</strong>{" "}
                (e.g., CPT/HCPCS code suggestions, modifier prompts, draft
                superbills)
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <>
                <strong>
                  secure audio, video, chat, or asynchronous data capture
                </strong>{" "}
                for telehealth encounters
              </>
            }
          />
        </ListItem>
      </List>

      <Typography variant="body1">
        The Platform is intended solely for use by licensed healthcare
        professionals and their authorised staff to facilitate accurate and
        efficient documentation and related administrative tasks; it is not a
        substitute for professional medical judgment, nor is it intended to
        diagnose, treat, cure, or prevent any disease.
      </Typography>

      <Typography variant="body1">
        By creating an account, accessing, or using any part of the Platform,
        you acknowledge that you have read, understood, and agree to be bound by
        (i) this Usage Policy and (ii) the Practitioner Terms of Service
        (together, the “Agreement”). Capitalised terms not defined herein have
        the meaning given in the Terms of Service.
      </Typography>
    </Box>
  );
};

export default UsageSummary;
