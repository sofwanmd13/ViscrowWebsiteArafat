import { useEffect, useMemo, useRef, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Grow from "@mui/material/Grow";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";
import { NavLink, useNavigate } from "react-router-dom";
import viscrowLogo from "../assets/viscrowLogo.png";

type MenuKey = "solutions" | "resources";

const pages = [
  { name: "About", path: "/about" },
  { name: "Pricing", path: "/pricing" },
] as const;

function Navbar() {
  const theme = useTheme();
  const navigate = useNavigate();

  // mobile drawer
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen((v) => !v);

  // desktop hover dropdown
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  const solutionsBtnRef = useRef<HTMLButtonElement | null>(null);
  const resourcesBtnRef = useRef<HTMLButtonElement | null>(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setOpenMenu(null);
    }, 140);
  };

  const openDropdown = (key: MenuKey) => {
    clearCloseTimer();
    setOpenMenu(key);
  };

  const closeDropdownNow = () => {
    clearCloseTimer();
    setOpenMenu(null);
  };

  useEffect(() => {
    return () => {
      clearCloseTimer();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navLinkSx = useMemo(
    () => ({
      my: 2,
      mx: 0.25,
      px: 1.5,
      py: 1,
      display: "flex",
      alignItems: "center",
      gap: 0.5,
      fontWeight: 500,
      fontSize: "1rem",
      textTransform: "none" as const,
      borderRadius: 2,
      position: "relative" as const,
      whiteSpace: "nowrap" as const,
      minWidth: 0,
      transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
      "&:hover": {
        color: "primary.main",
        backgroundColor: "rgba(25, 118, 210, 0.04)",
        transform: "translateY(-1px)",
      },
      "&::after": {
        content: '""',
        position: "absolute",
        width: "0%",
        height: "2px",
        bottom: "-1px",
        left: "50%",
        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
        borderRadius: "1px",
        transition: "all 0.25s ease-out",
        transform: "translateX(-50%)",
        opacity: 0,
        zIndex: 2,
      },
      "&:hover::after": {
        width: "75%",
        opacity: 1,
      },
    }),
    [theme.palette.primary.light, theme.palette.primary.main]
  );

  const menuPaperSx = {
    mt: 0.75,
    borderRadius: 2,
    minWidth: 240,
    border: "1px solid",
    borderColor: theme.palette.divider,
    boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
    overflow: "hidden",
    background: theme.palette.background.paper,
  } as const;

  const menuItemSx = {
    fontSize: "0.95rem",
    fontWeight: 500,
    px: 2.5,
    py: 1.25,
    borderRadius: 1,
    mx: 0.75,
    my: 0.25,
    transition: "all 0.18s ease",
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
      color: theme.palette.primary.main,
    },
  } as const;

  const go = (path: string) => {
    closeDropdownNow();
    navigate(path);
  };

  // Mobile drawer content
  const drawer = (
    <Box
      sx={{
        width: "100vw",
        bgcolor: "background.paper",
        color: "text.primary",
        height: "100%",
        background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
      }}
      role="presentation"
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 3,
          py: 2.5,
          background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
          color: "white",
        }}
      >
        <Box
          component={NavLink}
          to="/"
          sx={{
            textDecoration: "none",
            display: "inline-flex",
            gap: 1.5,
            alignItems: "center",
          }}
          onClick={handleDrawerToggle}
        >
          <Box
            component="img"
            src={viscrowLogo}
            alt="Viscrow Logo"
            sx={{
              width: 40,
              height: "auto",
              flexShrink: 0,
              display: "block",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontFamily: "Merriweather, serif",
              color: "white",
              fontSize: "1.1rem",
            }}
          >
            Viscrow Health
          </Typography>
        </Box>

        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            color: "white",
            "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
          }}
          aria-label="Close menu"
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Navigation Items */}
      <List sx={{ pt: 2 }}>
        {pages.map((page) => (
          <ListItem key={page.name} disablePadding sx={{ mx: 2, mb: 1 }}>
            <ListItemButton
              onClick={() => {
                handleDrawerToggle();
                navigate(page.path);
              }}
              sx={{
                borderRadius: 2,
                py: 1.5,
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "primary.light",
                  color: "white",
                  transform: "translateX(8px)",
                },
              }}
            >
              <ListItemText
                primary={page.name}
                sx={{
                  "& .MuiListItemText-primary": {
                    fontWeight: 500,
                    fontSize: "1rem",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}

        <Divider sx={{ mx: 2, my: 2 }} />

        {/* Solutions submenu (mobile) */}
        <Box sx={{ mx: 2 }}>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontWeight: 700,
              px: 1,
              mb: 1,
              textTransform: "uppercase",
              fontSize: "0.75rem",
              letterSpacing: 1,
            }}
          >
            Solutions
          </Typography>

          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              onClick={() => {
                handleDrawerToggle();
                navigate("/medical-billing-solutions");
              }}
              sx={{ borderRadius: 2, py: 1.2, pl: 2.5 }}
            >
              <ListItemText primary="Medical Billing Solutions" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              onClick={() => {
                handleDrawerToggle();
                navigate("/solutions");
              }}
              sx={{ borderRadius: 2, py: 1.2, pl: 2.5 }}
            >
              <ListItemText primary="AI Scribe Solution" />
            </ListItemButton>
          </ListItem>
        </Box>

        {/* Resources submenu (mobile) */}
        <Box sx={{ mx: 2, mt: 2 }}>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontWeight: 700,
              px: 1,
              mb: 1,
              textTransform: "uppercase",
              fontSize: "0.75rem",
              letterSpacing: 1,
            }}
          >
            Resources
          </Typography>

          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              onClick={() => {
                handleDrawerToggle();
                navigate("/blog");
              }}
              sx={{ borderRadius: 2, py: 1.2, pl: 2.5 }}
            >
              <ListItemText primary="Blog" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              onClick={() => {
                handleDrawerToggle();
                navigate("/roi-calculator");
              }}
              sx={{ borderRadius: 2, py: 1.2, pl: 2.5 }}
            >
              <ListItemText primary="ROI Calculator" />
            </ListItemButton>
          </ListItem>
        </Box>
      </List>

      {/* CTA */}
      <Box sx={{ px: 3, mt: 4 }}>
        <Button
          component="a"
          variant="outlined"
          href={import.meta.env.VITE_APP_URL}
          target="_blank"
          fullWidth
          sx={{
            mb: 2,
            fontWeight: 600,
            fontSize: "1rem",
            textTransform: "none",
            py: 1.5,
            borderRadius: 2,
            borderWidth: 2,
          }}
        >
          Sign In
        </Button>

        <Button
          component={NavLink}
          to="/contact"
          fullWidth
          variant="contained"
          color="primary"
          sx={{
            fontWeight: 700,
            fontSize: "1rem",
            textTransform: "none",
            py: 1.5,
            borderRadius: 2,
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
          }}
        >
          Book a demo
        </Button>
      </Box>
    </Box>
  );

  // desktop simple pages (About, Pricing)
  const simplePages = pages.filter((p) => p.path);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          pt: "7px",
          backgroundColor: "transparent",
          boxShadow: "none",
          color: "text.primary",
          zIndex: (t) => t.zIndex.drawer + 1,
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 0, md: 2 } }}>
          <Box
            sx={{
              width: { xs: "100%", md: "92%" },
              mx: "auto",
              borderRadius: { xs: 0, md: 2 },
              bgcolor: "rgba(255, 255, 255, 0.72)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: { xs: "none", md: "1px solid" },
              borderColor: { md: "rgba(0, 0, 0, 0.06)" },
              overflow: "visible",
            }}
          >
            <Toolbar
              disableGutters
              sx={{
                minHeight: { xs: 64, md: 72 },
                flexWrap: "nowrap",
                px: { xs: 2, md: 3 },
                overflow: "visible",
              }}
            >
              {/* Logo – clickable to home */}
              <Box
                component={NavLink}
                to="/"
                onClick={closeDropdownNow}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexShrink: 0,
                  mr: 2,
                  textDecoration: "none",
                }}
              >
                <Box
                  component="img"
                  src={viscrowLogo}
                  alt="Viscrow Health logo"
                  sx={{
                    height: { xs: 40, md: 44 },
                    width: "auto",
                    display: "block",
                    flexShrink: 0,
                    objectFit: "contain",
                  }}
                />
              </Box>

              {/* spacer – ALWAYS flexes, so burger goes to far right on mobile */}
              <Box sx={{ flex: 1, minWidth: 16 }} />

              {/* Desktop nav + dropdown zone */}
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  gap: 2,
                  flexShrink: 0,
                  position: "relative",
                  overflow: "visible",
                }}
                onMouseLeave={scheduleClose}
                onMouseEnter={clearCloseTimer}
              >
                {/* About / Pricing */}
                {simplePages.map((page) => (
                  <Button
                    key={page.name}
                    sx={navLinkSx}
                    onMouseEnter={() => {
                      clearCloseTimer();
                      setOpenMenu(null);
                    }}
                    onClick={() => navigate(page.path!)}
                  >
                    {page.name}
                  </Button>
                ))}

                {/* Solutions trigger */}
                <Button
                  ref={solutionsBtnRef}
                  sx={{
                    ...navLinkSx,
                    ...(openMenu === "solutions" && {
                      color: "primary.main",
                      backgroundColor: "rgba(25, 118, 210, 0.04)",
                      "&::after": { width: "75%", opacity: 1 },
                    }),
                  }}
                  onMouseEnter={() => openDropdown("solutions")}
                >
                  Solutions
                  <KeyboardArrowDownIcon
                    sx={{
                      fontSize: 18,
                      transition: "transform 0.2s ease",
                      transform: openMenu === "solutions" ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </Button>

                {/* Resources trigger */}
                <Button
                  ref={resourcesBtnRef}
                  sx={{
                    ...navLinkSx,
                    ...(openMenu === "resources" && {
                      color: "primary.main",
                      backgroundColor: "rgba(25, 118, 210, 0.04)",
                      "&::after": { width: "75%", opacity: 1 },
                    }),
                  }}
                  onMouseEnter={() => openDropdown("resources")}
                >
                  Resources
                  <KeyboardArrowDownIcon
                    sx={{
                      fontSize: 18,
                      transition: "transform 0.2s ease",
                      transform: openMenu === "resources" ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </Button>

                {/* Solutions dropdown */}
                <Popper
                  open={openMenu === "solutions"}
                  anchorEl={solutionsBtnRef.current}
                  placement="bottom-start"
                  disablePortal
                  modifiers={[
                    { name: "offset", options: { offset: [0, 10] } },
                    { name: "preventOverflow", options: { boundary: "viewport", padding: 8 } },
                  ]}
                  sx={{ zIndex: theme.zIndex.modal + 2 }}
                  transition
                >
                  {({ TransitionProps }) => (
                    <Grow {...TransitionProps} timeout={160}>
                      <Paper
                        sx={menuPaperSx}
                        onMouseEnter={clearCloseTimer}
                        onMouseLeave={scheduleClose}
                      >
                        <MenuList
                          autoFocusItem={false}
                          dense
                          onKeyDown={(e) => {
                            if (e.key === "Escape") closeDropdownNow();
                          }}
                        >
                          <MenuItem sx={menuItemSx} onClick={() => go("/medical-billing-solutions")}>
                            Medical Billing Solutions
                          </MenuItem>
                          <MenuItem sx={menuItemSx} onClick={() => go("/solutions")}>
                            AI Scribe Solution
                          </MenuItem>
                        </MenuList>
                      </Paper>
                    </Grow>
                  )}
                </Popper>

                {/* Resources dropdown */}
                <Popper
                  open={openMenu === "resources"}
                  anchorEl={resourcesBtnRef.current}
                  placement="bottom-start"
                  disablePortal
                  modifiers={[
                    { name: "offset", options: { offset: [0, 10] } },
                    { name: "preventOverflow", options: { boundary: "viewport", padding: 8 } },
                  ]}
                  sx={{ zIndex: theme.zIndex.modal + 2 }}
                  transition
                >
                  {({ TransitionProps }) => (
                    <Grow {...TransitionProps} timeout={160}>
                      <Paper
                        sx={{ ...menuPaperSx, minWidth: 220 }}
                        onMouseEnter={clearCloseTimer}
                        onMouseLeave={scheduleClose}
                      >
                        <MenuList
                          autoFocusItem={false}
                          dense
                          onKeyDown={(e) => {
                            if (e.key === "Escape") closeDropdownNow();
                          }}
                        >
                          <MenuItem sx={menuItemSx} onClick={() => go("/blog")}>
                            Blog
                          </MenuItem>
                          <MenuItem sx={menuItemSx} onClick={() => go("/roi-calculator")}>
                            ROI Calculator
                          </MenuItem>
                        </MenuList>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </Box>

              {/* Right actions (desktop) */}
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  gap: 1.5,
                  flexShrink: 0,
                  ml: 2,
                }}
                onMouseEnter={closeDropdownNow}
              >
                <Button
                  component="a"
                  href={import.meta.env.VITE_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  color="primary"
                  sx={{
                    minWidth: 108,
                    height: 40,
                    px: 2,
                    fontWeight: 500,
                    fontSize: "1rem",
                    textTransform: "none",
                    borderRadius: 1,
                    whiteSpace: "nowrap",
                    backgroundColor: "rgba(255,255,255,0.85)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    backdropFilter: "blur(4px)",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.95)",
                      transform: "translateY(-1px)",
                      boxShadow: "0 6px 18px rgba(0, 0, 0, 0.12)",
                    },
                  }}
                >
                  Sign In
                </Button>

                <Button
                  component={NavLink}
                  to="/contact"
                  variant="contained"
                  color="primary"
                  sx={{
                    minWidth: 128,
                    height: 40,
                    px: 2,
                    fontWeight: 400,
                    fontSize: "1rem",
                    textTransform: "none",
                    borderRadius: 1,
                    whiteSpace: "nowrap",
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
                    "&:hover": {
                      background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
                      transform: "translateY(-1px)",
                      boxShadow: `0 6px 16px ${theme.palette.primary.main}40`,
                    },
                  }}
                >
                  Book a demo
                </Button>
              </Box>

              {/* Mobile menu button – now naturally pushed to far right by spacer */}
              <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="open menu"
                  onClick={handleDrawerToggle}
                  sx={{
                    "&:hover": {
                      backgroundColor: "rgba(25, 118, 210, 0.04)",
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Box>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            transition: "transform 0.3s ease-in-out",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navbar;
