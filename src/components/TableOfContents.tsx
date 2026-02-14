import {
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";

const sections = [
  { title: "1. Accounts and registration", anchor: "accounts" },
  { title: "1.1 Accounts", anchor: "accounts-1" },
  { title: "1.2 Registration process", anchor: "accounts-2" },
  { title: "1.3 Account security", anchor: "accounts-3" },
  { title: "2. Services", anchor: "services" },
  { title: "2.1 Heidi overview", anchor: "services-1" },
  { title: "2.2 Updates to Heidi functions", anchor: "services-2" },
  { title: "2.3 Term", anchor: "services-3" },
];

export default function TableOfContents() {
  return (
    <Box sx={{ width: 300, p: 2, position: "sticky", top: 0 }}>
      <Typography variant="h6" gutterBottom>
        Table of Contents
      </Typography>
      <List dense>
        {sections.map((section) => (
          <ListItemButton
            key={section.anchor}
            component="a"
            href={`#${section.anchor}`}
            sx={{ pl: section.title.match(/^\d+\.\d+/) ? 4 : 2 }}
          >
            <ListItemText primary={section.title} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
