import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Seo } from "../components/seo";
import { useTranslation } from "react-i18next";
import { Card } from "../components/card";
import { Footer } from "../containers/footer";
import { makeStyles } from "@mui/styles";
import { Team } from "../components/card";
import { Typography, Link } from "@mui/material";

const useStyles = makeStyles((theme: any) => {
  return {
    root: {},
  };
});

const FAQs: NextPage = () => {
  const { t, i18n } = useTranslation();
  const { root } = useStyles();

  return (
    <div>
      <Seo
        description="Home package for travel packages"
        title="FAQ's"
        siteTitle="Gypsy Traces"
      />

      <main className={root}></main>

      <Footer />
    </div>
  );
};

export default FAQs;
