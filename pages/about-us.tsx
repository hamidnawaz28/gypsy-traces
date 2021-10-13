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

const teamDetails = [
  {
    img: "bakhsh-ur-rehman.jpg",
    name: "Bakhsh Ur Rehman",
    designation: "CEO",
    linkedin: "bakhsh-ur-rehman",
  },
  {
    img: "hamid-nawaz.jpg",
    name: "Hamid Nawaz",
    designation: "Tech / Marketing",
    linkedin: "hamidnawaz-",
  },
];

const affiliations = [
  {
    label: "FBR",
    imgUrl: "FBR.png",
    siteLink: "https://www.fbr.gov.pk",
  },
  {
    label: "PATO",
    imgUrl: "PATO.png",
    siteLink: "https://www.pato.org.pk",
  },
  {
    label: "SECP",
    imgUrl: "secp.png",
    siteLink: "https://www.secp.gov.pk",
  },
  {
    label: "DTS",
    imgUrl: "gov-pakistan.png",
    siteLink: "https://www.dts.gov.pk",
  },
];
const paraData = [
  {
    label: "CEO Message",
    para: `Humans are nomadic specie in search of inner peace and happiness. He/She enjoys exploring his/her seld in the context of the physical traces of the past nomadic envoironment and the extents of mother nature. Me and my team at gypsy Traces & Tours private limited will make an endeavour to assist you in realization of your inner peace and real happiness.`,
  },
  {
    label: "Our Vision",
    para: `Explore yourself on the backdrop of gypsytraces on nature and civilizations.`,
  },
  {
    label: "Our Mission",
    para: `To facilitate our worthy clients in exploring the cultural and natural richness of Pakistan in eco friendly and cost effective manner.`,
  },
];

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
        {paraData.map((item) => (
          <>
            <h5 className={title}>{item.label}</h5>
            <p>
              <Typography variant="body1">{item.para}</Typography>
            </p>
          </>
        ))}

        <h5 className={title}>Team</h5>
        <Team team={teamDetails} />
        <h5 className={title}>Our Affiliations</h5>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {affiliations.map((el, id) => {
            const imgSrc = `/affiliations/${el.imgUrl}`;
            const label = el.label;
            const siteLink = el.siteLink;
            return (
              <Link
                href={siteLink}
                key={id}
                underline="none"
                style={{ textAlign: "center" }}
              >
                <img src={imgSrc} alt={label} width="100px" />
                <p>{label}</p>
              </Link>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
