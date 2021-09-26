import "../styles/globals.css";
import type { AppProps } from "next/app";
import theme from "../components/theme";
import { ThemeProvider } from "@mui/material";
import { Header } from "../containers/header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
