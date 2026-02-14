import { createTheme } from "@mui/material/styles";

const typography = {
  fontFamily: `"Plus Jakarta Sans", "Inter", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif`,
  h1: {
    fontWeight: 550,
    letterSpacing: "-0.01em",
    fontSize: "3.75rem",       // desktop base
    lineHeight: 1.15,
    "@media (max-width:900px)": {
      fontSize: "2.5rem",
    },
  },
  h2: {
    fontWeight: 700,
    letterSpacing: "-0.01em",
  },
  h3: {
    fontWeight: 700,
    letterSpacing: "-0.02em",
  },
  h4: {
    fontWeight: 600,
  },
  h5: {
    fontWeight: 450,
    lineHeight: 1.6,
  },
  h6: {
    fontWeight: 600,
  },
  body1: {
    fontSize: "1rem",
    lineHeight: 1.6,
  },
  body2: {
    fontSize: "0.95rem",
    lineHeight: 1.5,
  },
};

export const lightTheme = createTheme({
  typography,
  palette: {
    mode: "light",
    primary: {
      main: "#10768a", // Original teal
      light: "#4a9ba8",
      dark: "#0a5d6b",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f99d1c", // Original orange
      light: "#ffb84d",
      dark: "#e08b18",
      contrastText: "#ffffff",
    },
    error: {
      main: "#DC2626",
      light: "#F87171",
      dark: "#991B1B",
    },
    warning: {
      main: "#F59E0B",
      light: "#FCD34D",
      dark: "#D97706",
    },
    success: {
      main: "#059669",
      light: "#34D399",
      dark: "#047857",
    },
    info: {
      main: "#0EA5E9",
      light: "#38BDF8",
      dark: "#0284C7",
    },
    grey: {
      50: "#F8FAFC",
      100: "#F1F5F9",
      200: "#E2E8F0",
      300: "#CBD5E1",
      400: "#94A3B8",
      500: "#64748B",
      600: "#475569",
      700: "#334155",
      800: "#1E293B",
      900: "#0F172A",
    },
    action: {
      selected: "#d7f1ff",
      hover: "#F1F5F9",
    },
    background: {
      default: "#f7f8fc",
      paper: "#ffffff",
    },
    text: {
      primary: "#0F172A",
      secondary: "#475569",
    },
    divider: "#E2E8F0",
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        // ✅ define keyframes in the theme
        "@keyframes viscFlowA": {
          "0%": { transform: "translate3d(-6%, -4%, 0) scale(1)" },
          "50%": { transform: "translate3d(4%, 2%, 0) scale(1.06)" },
          "100%": { transform: "translate3d(-6%, -4%, 0) scale(1)" },
        },
        "@keyframes viscFlowB": {
          "0%": { transform: "translate3d(5%, 6%, 0) scale(1.02)" },
          "50%": { transform: "translate3d(-4%, -3%, 0) scale(1.07)" },
          "100%": { transform: "translate3d(5%, 6%, 0) scale(1.02)" },
        },

        body: {
          minHeight: "100vh",
          margin: 0,
          overflowX: "hidden",
          isolation: "isolate",

          // ✅ base diagonal that always shows through
          background: `
            linear-gradient(135deg, #eaf7ff 0%, #f5fbff 45%, #fff5ec 100%)
          `,
          backgroundAttachment: "fixed",

          // ✅ 2 “flowy blobs” (GPU-friendly because we animate transforms, not background-position)
          "&::before": {
            content: '""',
            position: "fixed",
            inset: "-18%",
            zIndex: -1,
            pointerEvents: "none",
            background: `
              radial-gradient(circle at 25% 20%, rgba(16,118,138,0.28), transparent 55%),
              radial-gradient(circle at 70% 65%, rgba(14,165,233,0.18), transparent 58%),
              radial-gradient(circle at 55% 35%, rgba(249,157,28,0.14), transparent 60%)
            `,
            filter: "blur(80px)",
            opacity: 0.9,
            transform: "translate3d(0,0,0)",
            animation: "viscFlowA 22s ease-in-out infinite",
          },

          "&::after": {
            content: '""',
            position: "fixed",
            inset: "-22%",
            zIndex: -1,
            pointerEvents: "none",
            background: `
              radial-gradient(circle at 70% 25%, rgba(14,165,233,0.22), transparent 58%),
              radial-gradient(circle at 30% 75%, rgba(16,118,138,0.18), transparent 60%),
              radial-gradient(circle at 55% 55%, rgba(249,157,28,0.12), transparent 62%)
            `,
            filter: "blur(90px)",
            opacity: 0.75,
            transform: "translate3d(0,0,0)",
            animation: "viscFlowB 28s ease-in-out infinite",
          },

          // ✅ accessibility / performance
          "@media (prefers-reduced-motion: reduce)": {
            "&::before": { animation: "none" },
            "&::after": { animation: "none" },
          },
        },

        "#root": {
          minHeight: "100vh",
          position: "relative",
          zIndex: 0,
          background: "transparent",
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  typography,
  palette: {
    mode: "dark",
    primary: {
      main: "#80d2e8", // A softer, calming blue for the main color
    },
    secondary: {
      main: "#adccd5", // Warm accent color for contrast
    },
    error: {
      main: "#ffb4ab",
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
  },
});