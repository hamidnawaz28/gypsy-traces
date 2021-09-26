import { createTheme } from "@mui/material/styles";
import {
  green,
  red,
  deepOrange,
  orange,
  lightGreen,
} from "@mui/material/colors";

const primaryPalette = {
  light: "#23959661",
  main: "#239596",
  dark: "#0e8182",
  contrastText: "#111",
};

const secondaryPalette = {
  light: "#f2717154",
  main: "#F27171",
  dark: "#f96a6a",
  contrastText: "#111",
};

const notificationPalette = {
  error: red[500],
  danger: deepOrange[500],
  warning: orange[500],
  info: lightGreen[500],
  success: green[500],
};

const theme = createTheme({
  palette: {
    primary: { ...primaryPalette },
    secondary: { ...secondaryPalette },
    notification: { ...notificationPalette },
    contrastThreshold: 3,
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
  spacing: {},
  breakpoints: {},
});
export default theme;
