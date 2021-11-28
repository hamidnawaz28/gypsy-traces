import "../styles/globals.css";
import type { AppProps } from "next/app";
import { WhatsApp } from "@mui/icons-material";
import theme from "../components/theme";
import { ThemeProvider, Link } from "@mui/material";
import { Header } from "../containers/header";
import { useState, useEffect } from "react";
import { addADoc } from "../firebase";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import { gypsyWhatsAppLink } from "../data/constants";

const useStyles = makeStyles((theme: Theme) => {
  return {
    whatsAppIcon: {
      verticalAlign: "middle",
      color: "#06d755",
      position: "fixed",
      right: 10,
      bottom: 10,
      width: 50,
      height: 50,
      "&:hover": {
        cursor: "pointer",
      },
    },
  };
});

function MyApp({ Component, pageProps }: AppProps) {
  const [data, getData] = useState({});
  const { whatsAppIcon } = useStyles();
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
    getIPData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />

      <Link href={gypsyWhatsAppLink} target="_blank" underline="none">
        <WhatsApp className={whatsAppIcon} />
      </Link>
    </ThemeProvider>
  );
}

export default MyApp;
