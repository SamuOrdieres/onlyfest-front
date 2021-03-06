import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});

theme = createTheme(theme, {
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
  palette: {
    primary: {
      main: "#dc098a",
    },
    secondary: {
      main: "#00f3be",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          marginBottom: "2rem",
          [theme.breakpoints.up("mobile")]: {
            maxWidth: 300,
          },
          [theme.breakpoints.up("tablet")]: {
            maxWidth: 500,
          },
          [theme.breakpoints.up("laptop")]: {
            maxWidth: 800,
          },
          [theme.breakpoints.up("desktop")]: {
            maxWidth: 1200,
          },
        },
      },
    },
    MuiTextField: {
      variants: [
        {
          props: { variant: "search" },
          style: {
            [theme.breakpoints.up("mobile")]: {
              maxWidth: 300,
            },
            [theme.breakpoints.up("tablet")]: {
              maxWidth: 500,
            },
            [theme.breakpoints.up("laptop")]: {
              maxWidth: 800,
            },
            [theme.breakpoints.up("desktop")]: {
              maxWidth: 1200,
            },
          },
        },
      ],
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          zIndex: theme.zIndex.drawer + 1,
        },
      },
    },
  },
});

export default theme;
