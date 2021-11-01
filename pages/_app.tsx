import "../styles/globals.css";
import type { AppProps } from "next/app";

import theme from "../components/theme";
import { ThemeProvider } from "@mui/material";
import { Header } from "../containers/header";
import { useState, useEffect } from "react";
import { addADoc } from "../firebase";

function MyApp({ Component, pageProps }: AppProps) {
  const [data, getData] = useState({});

  const getIPData = async () => {
    try {
      const request = await fetch(
        "https://ipinfo.io/json?token=f49864b253a53e"
      );
      const data = await request.json();
      getData(data);
      addADoc("gypsy-user-ip", data);
    } catch (err) {
      console.log("-----ipinfo----", err);
    }
  };

  useEffect(() => {
    // getIPData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
