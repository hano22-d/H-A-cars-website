import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { UsethemeToggle } from "../context/themeContext";
import { useMemo } from "react";
import { Link as RouterLink } from "react-router-dom";
import "@fontsource/montserrat/600";
import "@fontsource/tajawal/500";

function ThemeWrapper({ children }) {
  const { toggleMode } = UsethemeToggle();

  const baseTheme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: { main: "#ff4c29" },
          secondary: { main: "#2B2B2B" },
          background: {
            default: "#cfd2d4",
            paper: "rgb(255, 255, 255)",
            details: "rgba(171, 171, 171, 0.4)",
          },
          text: { primary: "#1B1B1B", secondary: "#555555" },
          mode: "light",
        },
        typography: {
          fontFamily: "tajawal, sans-serif",
          h1: {
            fontSize: "clamp(2rem, 5vw, 3rem)",
            letterSpacing: "-1px",
            color: "#ff4c29",
            fontFamily: '"Montserrat", sans-serif',
            lineHeight: 2.2,
          },
          h2: {
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            fontWeight: 600,
            color: "#ff4c29",
            fontFamily: '"Montserrat", sans-serif',
            lineHeight: 2,
          },
          h3: {
            fontSize: "clamp(1.2rem, 3vw, 2rem)",
            fontWeight: 600,
            color: "#ff4c29",
            lineHeight: 1.7,
          },
          body1: { fontSize: "1rem", lineHeight: 1.7 },
        },
        shape: { borderRadius: 12 },
        components: {
          MuiCard: {
            defaultProps: { elevation: 5 },
            styleOverrides: {
              root: { transition: "all 300ms cubic-bezier(0.0, 0, 0.2, 1)" },
            },
          },
          MuiPaper: { defaultProps: { elevation: 3 } },
          MuiButton: {
            styleOverrides: {
              root: ({theme}) => ( { transition: "all 300ms cubic-bezier(0.0, 0, 0.2, 1)" ,
                '&:hover': {
                  color: 'wheat',
                  backgroundColor: theme.palette.primary.main
                }
              }),
            },
          },
          MuiLink: {
            defaultProps: { underline: "none", component: RouterLink },
            styleOverrides: {
              root: ({ theme }) => ({
                color: theme.palette.text.primary,
                transition: "color 200ms ease",
                "&:hover": { color: theme.palette.primary.main },
              }),
            },
          },
          MuiDivider: {
            styleOverrides: {
              root: ({ theme }) => ({
                borderColor: theme.palette.primary.main,
                borderWidth: 1,
                opacity: 0.5,
              }),
            },
          },
        },
        transitions: {
          duration: { standard: 300 },
          easing: { easeOut: "cubic-bezier(0.0, 0, 0.2, 1)" },
        },
      }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        ...baseTheme,
        palette: {
          ...baseTheme.palette,
          mode: toggleMode ? "dark" : "light",
          background: toggleMode
            ? { default: "#121212", paper: "rgba(30,30,30,0.9)" }
            : baseTheme.palette.background,
          text: toggleMode
            ? { primary: "#ffffff", secondary: "#cccccc" }
            : baseTheme.palette.text,
        },
      }),
    [toggleMode, baseTheme]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default ThemeWrapper;
