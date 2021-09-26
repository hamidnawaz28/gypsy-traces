import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Seo } from "../components/seo";
import { useTranslation } from "react-i18next";
import { Card, CardGroup } from "../components/card";
import { Footer } from "../containers/footer";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import jsonData from "../components/internationalization/en-US.json";
import { Header } from "../containers/header";
import { HomeAnimation } from "../containers/HomeAnimation";

const useStyles = makeStyles({
  root: {},
});

const Home: NextPage = () => {
  const { t, i18n } = useTranslation();
  const { packages } = jsonData.translation;
  const { root } = useStyles();

  return (
    <div>
      <Seo
        description="Home package for travel packages"
        title="Home"
        siteTitle="Top destinations to travel in Pakistan"
      />
      <main>
        {/* <Header /> */}
        <HomeAnimation />
        <CardGroup dataArr={packages} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
