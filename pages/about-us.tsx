import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Seo } from "../components/seo";
import { useTranslation } from "react-i18next";
import { Card } from "../components/card";
import { Footer } from "../containers/footer";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      padding: "5% 20%",
    },
    title: {
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        fontSize: 15,
      },
      [theme.breakpoints.between("sm", "md")]: {
        fontSize: 20,
      },
      [theme.breakpoints.between("md", "lg")]: {
        fontSize: 30,
      },
      [theme.breakpoints.between("lg", "xl")]: {
        fontSize: 40,
      },
      [theme.breakpoints.up("xl", "")]: {
        fontSize: 50,
      },
    },
  };
});

const AboutUs: NextPage = () => {
  const { t, i18n } = useTranslation();
  const { root, title } = useStyles();

  return (
    <div>
      <Seo
        description="Home package for travel packages"
        title="About Us"
        siteTitle="Gypsy Traces"
      />

      <main className={root}>
        <h5 className={title}>CEO Message</h5>
        <p>
          Humans are nomadic specie in search of inner peace and happiness.
          He/She enjoys exploring his/her seld in the context of the physical
          traces of the past nomadic envoironment and the extents of mother
          nature. Me and my team at gypsy Traces & Tours private limited will
          make an endeavour to assist you in realization of your inner peace and
          real happiness.
        </p>
        <h5 className={title}>Our Vision</h5>
        <p>
          Explore yourself on the backdrop of gypsytraces on nature and
          civilizations.
        </p>
        <h5 className={title}>Our Mission</h5>
        <p>
          To facilitate our worthy clients in exploring the cultural and natural
          richness of Pakistan in eco friendly and cost effective manner.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
