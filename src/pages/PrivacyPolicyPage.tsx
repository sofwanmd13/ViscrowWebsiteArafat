import {
  Box,
  Container,
  Typography,
  Divider,
  List,
  ListItem,
} from "@mui/material";

const PrivacyPolicyPage = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "background.default" }}>
      <Container maxWidth="md">
        {/* Title */}
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          <strong>Effective Date:</strong> January 13, 2025
        </Typography>
        <Divider sx={{ my: 2 }} />

        {/* Section 1: Information We Collect */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          1. Information We Collect
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          We collect the following types of information to enhance your
          experience with our services:
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          <strong>1.1 Personal Information</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Name, email address, phone number, and other contact details you
          voluntarily provide.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          <strong>1.2 Usage Data</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Information such as your IP address, browser type, operating system,
          pages viewed, time spent on our website, and referring URLs.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          <strong>1.3 Cookies and Tracking Technologies</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          We use cookies and similar technologies to enhance your user
          experience, analyze website traffic, and understand user preferences.
        </Typography>
        <Divider sx={{ my: 2 }} />

        {/* Section 2: How We Use Your Information */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          2. How We Use Your Information
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          We process the information collected for the following purposes:
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          <strong>To Provide Services:</strong> Deliver and manage the services
          you request.
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          <strong>To Communicate:</strong> Respond to inquiries, send
          service-related updates, and communicate changes.
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          <strong>To Optimize User Experience:</strong> Analyze website usage,
          improve content, and enhance functionality.
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          <strong>For Marketing (With Consent):</strong> Send promotional
          materials if you opt-in.
        </Typography>
        <Divider sx={{ my: 2 }} />

        {/* Section 3: Sharing Your Information */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          3. Sharing Your Information
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          We respect your privacy and do not sell your personal information.
          However, we may share your data in the following scenarios:
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          <strong>Service Providers:</strong> With trusted third-party partners
          for services such as hosting, analytics, payment processing, and
          customer support.
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          <strong>Legal Compliance:</strong> When required by law, legal
          processes, or to protect the rights, safety, or property of our users
          and business.
        </Typography>
        <Divider sx={{ my: 2 }} />

        {/* Section 4: Data Retention */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          4. Data Retention
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          We retain your personal data for as long as necessary to fulfill the
          purposes outlined in this Privacy Policy, comply with legal
          obligations, or resolve disputes.
        </Typography>
        <Divider sx={{ my: 2 }} />

        {/* Section 5: Your Rights */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          5. Your Rights
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          As a user, you have the following rights regarding your data:
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          <strong>Access and Correction:</strong> Request access to and
          correction of your personal data.
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          <strong>Data Portability:</strong> Receive your data in a portable
          format where applicable.
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          <strong>Opt-Out:</strong> Withdraw consent for marketing
          communications at any time.
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          <strong>Deletion:</strong> Request deletion of your personal data
          where permissible by law.
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          <strong>Cookie Preferences:</strong> Manage your cookie preferences
          through your browser settings or our cookie banner.
        </Typography>
        <Divider sx={{ my: 2 }} />

        {/* Section 6: Data Security */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          6. Data Security
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          We implement industry-standard security measures, such as encryption
          and firewalls, to protect your data. While we strive to secure your
          information, no transmission method is 100% secure, and we encourage
          users to exercise caution.
        </Typography>
        <Divider sx={{ my: 2 }} />

        {/* Section 7: Cookies Policy */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          7. Cookies Policy
        </Typography>
        <Typography variant="body1" color="text.secondary">
          We use the following types of cookies:
        </Typography>
        <List>
          <ListItem disableGutters>
            <Typography variant="body2" color="text.secondary">
              <strong>Essential Cookies:</strong> Required for website
              functionality.
            </Typography>
          </ListItem>
          <ListItem disableGutters>
            <Typography variant="body2" color="text.secondary">
              <strong>Performance Cookies:</strong> Track website usage for
              optimization.
            </Typography>
          </ListItem>
          <ListItem disableGutters>
            <Typography variant="body2" color="text.secondary">
              <strong>Targeting Cookies:</strong> Provide tailored advertising
              and recommendations.
            </Typography>
          </ListItem>
        </List>
        <Typography variant="body1" color="text.secondary" paragraph>
          You can manage or disable cookies through your browser settings.
        </Typography>
        <Divider sx={{ my: 2 }} />

        {/* Section 8: International Data Transfers */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          8. International Data Transfers
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          If you access our services outside the United States, your data may be
          transferred and processed in compliance with applicable data
          protection laws.
        </Typography>
        <Divider sx={{ my: 2 }} />

        {/* Section 9: Changes to This Policy */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          9. Changes to This Policy
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          We may update this Privacy Policy periodically to reflect changes in
          our practices or applicable laws. Updates will be posted on this page
          with an updated effective date.
        </Typography>
        <Divider sx={{ my: 2 }} />

        {/* Section 10: Governing Law and Dispute Resolution */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          10. Governing Law and Dispute Resolution
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          <strong>10.1 Governing Law:</strong> These Terms are governed by the
          laws of <strong>New York, United States</strong>.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          <strong>10.2 Dispute Resolution:</strong> Any disputes will first be
          resolved through good faith negotiation. If unresolved, disputes may
          be submitted to binding arbitration under the rules of the{" "}
          <strong>American Arbitration Association</strong>.
        </Typography>

        <Divider sx={{ my: 2 }} />

        {/* Section 11: Contact Us */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          11. Contact Us
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          If you have questions or concerns about these Terms, please reach out
          to us:
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          <strong>Viscrow Health Inc.</strong>
          <br />
          Email: <a href="mailto:sofwan@viscrow.com">sofwan@viscrow.com</a>
          <br />
          Address: 418 Broadway, STE N, Albany, NY 12207, USA
        </Typography>
      </Container>
    </Box>
  );
};

export default PrivacyPolicyPage;
