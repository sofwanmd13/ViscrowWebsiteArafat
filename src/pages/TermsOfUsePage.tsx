import { Box, Container, Typography, Divider } from "@mui/material";

const TermsOfUsePage = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Terms of Use
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          <strong>Effective Date:</strong> January 13, 2025
        </Typography>
        <Divider sx={{ my: 2 }} />

        {/* Section 1: Eligibility */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          1. Eligibility
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          You must be at least 18 years old to use this website or our services.
          By accessing or using our services, you represent that you have the
          legal capacity to enter into these Terms.
        </Typography>
        <Divider sx={{ my: 2 }} />

        {/* Section 2: Use of Website and Services */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          2. Use of Website and Services
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          <strong>2.1 Permitted Use:</strong> You agree to use our website and
          services only for lawful purposes.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          <strong>2.2 Prohibited Activities:</strong> You may not:
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Introduce viruses, malware, or other harmful technologies.
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Attempt to gain unauthorized access to our systems or data.
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Engage in fraudulent, abusive, or illegal activities.
        </Typography>
        <Divider sx={{ my: 2 }} />

        {/* Section 3: Intellectual Property */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          3. Intellectual Property
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          All content, including text, images, designs, and logos, is the
          exclusive property of Viscrow Health Inc. and is protected by
          intellectual property laws. You may not copy, reproduce, modify, or
          distribute any content without prior written consent. Any unauthorized
          use of our intellectual property may result in legal action.
        </Typography>
        <Divider sx={{ my: 2 }} />

        {/* Section 4: User Accounts */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          4. User Accounts
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          If applicable, you are responsible for maintaining the confidentiality
          of your account credentials. Any activity conducted under your account
          is your responsibility.
        </Typography>
        <Divider sx={{ my: 2 }} />

        {/* Section 5: Limitation of Liability */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          5. Limitation of Liability
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          <strong>No Warranty:</strong> Our services are provided "as is" and
          "as available." We do not guarantee uninterrupted access or error-free
          performance.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          <strong>Exclusions:</strong> Viscrow Health Inc. is not liable for
          direct, indirect, incidental, or consequential damages, including but
          not limited to loss of data, revenue, or business opportunities.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          <strong>Maximum Liability:</strong> In no event will our liability
          exceed the amount you have paid to us, if applicable.
        </Typography>
        <Divider sx={{ my: 2 }} />

        {/* Section 6: Third-Party Links */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          6. Third-Party Links
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Our website may contain links to third-party websites for your
          convenience. We do not endorse or control their content, privacy
          practices, or terms. Visiting these websites is at your own risk.
        </Typography>
        <Divider sx={{ my: 2 }} />

        {/* Section 7: Privacy Policy */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          7. Privacy Policy
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Your use of our services is also governed by our Privacy Policy, which
          explains how we collect, use, and protect your personal information.
          By using our services, you agree to the terms of the Privacy Policy.
        </Typography>
        <Divider sx={{ my: 2 }} />

        {/* Section 8: Termination of Use */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          8. Termination of Use
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          We reserve the right to suspend or terminate your access to our
          services if you violate these Terms or engage in prohibited
          activities.
        </Typography>
        <Divider sx={{ my: 2 }} />

        {/* Section 9: Changes to Terms */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          9. Changes to Terms
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          We may update these Terms from time to time. Any changes will take
          effect immediately upon posting. Continued use of our website
          constitutes acceptance of the updated Terms.
        </Typography>
        <Divider sx={{ my: 2 }} />

        {/* Section 10: Governing Law and Dispute Resolution */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          10. Governing Law and Dispute Resolution
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          <strong>10.1 Governing Law:</strong> These Terms are governed by the
          laws of New York, United States.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          <strong>10.2 Dispute Resolution:</strong> Any disputes will first be
          resolved through good faith negotiation. If unresolved, disputes may
          be submitted to binding arbitration under the rules of the American
          Arbitration Association.
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

export default TermsOfUsePage;
