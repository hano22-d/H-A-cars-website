import { createTheme } from "@mui/material/styles";
import "@fontsource/montserrat/600";
import "@fontsource/tajawal/500";
import { Link as RouterLink } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff4c29",
    },
    secondary: {
      main: "#2B2B2B",
    },
    background: {
      default: "#cfd2d4",
      paper: "rgba(255, 255, 255, 0.8);",
    },
    text: {
      primary: "#1B1B1B",
      secondary: "#555555",
    },
  },
  typography: {
    fontFamily: "tajawal, sans-serif",

    h1: {
      fontSize: "3rem",
      letterSpacing: "-1px",
      color: "#ff4c29",
      fontFamily: '"Montserrat", "sans-serif"',
      lineHeight: 2.2,
    },
    h2: {
      fontSize: "2.2rem",
      fontWeight: 600,
      color: "#ff4c29",
      fontFamily: '"Montserrat", "sans-serif"',
      lineHeight: 2,
    },

    h3: {
      fontSize: "1.8rem",
      fontWeight: 600,
      color: "#ff4c29",
      lineHeight: 1.7,
    },

    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      defaultProps: {
        elevation: 5,
      },
      styleOverrides: {
        root: { transition: "all 300ms cubic-bezier(0.0, 0, 0.2, 1)" },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 3,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { transition: "all 300ms cubic-bezier(0.0, 0, 0.2, 1)" },
      },
    },
    MuiLink: {
        defaultProps: {
          underline: "none",
          component: RouterLink,
        },
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.text.primary,
            transition: "color 200ms ease",
            "&:hover": {
              color: theme.palette.primary.main,
            },
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
    duration: {
      standard: 300,
    },
    easing: { easeOut: "cubic-bezier(0.0, 0, 0.2, 1)" },
  },
});

export default theme;
