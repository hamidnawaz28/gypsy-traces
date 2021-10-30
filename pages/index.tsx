import { NextPage } from "next";
import { Seo } from "../components/seo";
import { useTranslation } from "react-i18next";
import { Footer } from "../containers/footer";
import { makeStyles } from "@mui/styles";
import jsonData from "../components/internationalization/en-US.json";
import { HomeAnimation } from "../containers/HomeAnimation";
import { CardGroup } from "../components/card";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";

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
        pageTitle="Home"
        contentTitle={"Top destinations to travel in Pakistan"}
        pageUrl={``}
      />
      <main>
        <HomeAnimation />
        <CardGroup dataArr={packages} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
