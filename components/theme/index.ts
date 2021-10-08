import { createTheme } from "@mui/material/styles";
import {
  green,
  red,
  orange,
  grey,
  deepOrange,
  lightGreen,
} from "@mui/material/colors";

const primaryPalette = {
  light: "#23959661",
  main: "#239596",
  dark: "#0e8182",
  contrastTexta: "#111",
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
    text: {
      primary: "#141414",
      secondary: "#ffffff",
      disabled: "#cccccc",
    },
    divider: grey[50],
    // action: {
    //   active: "#f96a6a",
    //   hover: "#1111",
    //   hoverOpacity: 1,
    //   selected: "#f96a6a",
    //   disabled: "#f96a6a",
    //   disabledBackground: "#f96a6a",
    // },
    background: {
      default: grey[200],
    },

    // error: {},
    // success: {},
    // warning: {},
    // info: {},
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
    fontSize: 12,
    fontWeightRegular: 400,
    fontWeightLight: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  spacing: 2,
  // breakpoints: {},
});
export default theme;
