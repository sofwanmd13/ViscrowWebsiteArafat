import React from "react";
import { Box, Typography, Paper, useTheme, Link } from "@mui/material";
import {
  Warning,
  Report,
  Update,
  ContactMail,
  Science,
} from "@mui/icons-material";

const PolicySections: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ my: 4 }}>
      {/* Section 8: Beta & Experimental Features */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: theme.palette.primary.main,
            mb: 3,
          }}
        >
          8. Beta & Experimental Features
        </Typography>

        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
          <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
            <Science color="primary" sx={{ mr: 1.5, mt: 0.5 }} />
            <Typography variant="body1">
              Features or interfaces labelled "Beta," "Preview," or "Labs" are
              provided as-is, may be changed or removed at any time, and carry
              no SLA, uptime guarantee, or support obligations. They remain
              subject to all restrictions and disclaimers in this Policy.
            </Typography>
          </Box>
        </Paper>
      </Box>

      {/* Section 9: Enforcement; Suspension & Termination */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: theme.palette.primary.main,
            mb: 3,
          }}
        >
          9. Enforcement; Suspension & Termination
        </Typography>

        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
          <Box sx={{ display: "flex", alignItems: "flex-start" }}>
            <Warning color="primary" sx={{ mr: 1.5, mt: 0.5 }} />
            <Typography variant="body1">
              Viscrow may monitor usage logs to detect violations. We may
              suspend or terminate access, disable specific features, and/or
              delete data without prior notice if we reasonably believe you have
              breached this Policy, the Terms of Service, or applicable law.
              Suspension does not relieve you of fees accrued up to the
              suspension date.
            </Typography>
          </Box>
        </Paper>
      </Box>

      {/* Section 10: Reporting Issues & Incident Response */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: theme.palette.primary.main,
            mb: 3,
          }}
        >
          10. Reporting Issues & Incident Response
        </Typography>

        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
          <Box sx={{ display: "flex", alignItems: "flex-start" }}>
            <Report color="primary" sx={{ mr: 1.5, mt: 0.5 }} />
            <Typography variant="body1">
              Questions, security concerns, or suspected Policy violations
              should be reported to{" "}
              <Link href="mailto:sofwan@viscrow.com" color="primary">
                sofwan@viscrow.com
              </Link>
              . We investigate all good-faith reports and will keep you
              reasonably informed of remediation progress.
            </Typography>
          </Box>
        </Paper>
      </Box>

      {/* Section 11: Policy Changes */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: theme.palette.primary.main,
            mb: 3,
          }}
        >
          11. Policy Changes
        </Typography>

        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
          <Box sx={{ display: "flex", alignItems: "flex-start" }}>
            <Update color="primary" sx={{ mr: 1.5, mt: 0.5 }} />
            <Typography variant="body1">
              We may update this Policy from time to time. Material changes will
              be announced via email or in-app banner at least 30 days in
              advance. Continued use of the Platform after the effective date
              constitutes acceptance of the revised Policy.
            </Typography>
          </Box>
        </Paper>
      </Box>

      {/* Section 12: Contact Information */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: theme.palette.primary.main,
            mb: 3,
          }}
        >
          12. Contact Information
        </Typography>

        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
          <Box sx={{ display: "flex", alignItems: "flex-start" }}>
            <ContactMail color="primary" sx={{ mr: 1.5, mt: 0.5 }} />
            <Box>
              <Typography variant="body1" paragraph sx={{ mb: 1 }}>
                Viscrow Health Inc.
              </Typography>
              <Typography variant="body1" paragraph sx={{ mb: 1 }}>
                418 Broadway, Suite N<br />
                Albany, NY 12207 USA
              </Typography>
              <Typography variant="body1">
                Email:{" "}
                <Link href="mailto:sofwan@viscrow.com" color="primary">
                  sofwan@viscrow.com
                </Link>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default PolicySections;
