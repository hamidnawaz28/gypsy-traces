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
import { Theme } from "@mui/system";

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      padding: "5% 20%",
      [theme.breakpoints.down("sm")]: {
        padding: "5% 2%",
      },
      "& p": {
        textAlign: "justify",
      },
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
      [theme.breakpoints.up("xl")]: {
        fontSize: 50,
      },
    },
    affiliation: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "repeat(2,1fr)",
      },
    },
  };
});

const teamDetails = [
  {
    img: "zahid-hussain.jpg",
    name: "Zahid Hussain",
    designation: "CEO",
    linkedin: "zahid-hussain-a9860464",
  },
  {
    img: "bakhsh-ur-rehman.jpg",
    name: "Bakhsh Ur Rehman",
    designation: "Director Operations",
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
    label: "SECP",
    imgUrl: "secp.png",
    siteLink: "https://www.secp.gov.pk",
  },
  {
    label: "DTS",
    imgUrl: "gov-pakistan.png",
    siteLink: "https://www.dts.gov.pk",
  },
  {
    label: "PATO",
    imgUrl: "PATO.png",
    siteLink: "https://www.pato.org.pk",
  },
];
const paraData = [
  {
    label: "About Us",
    para: `“Gypsy Traces & Tours Private Limited” is a purpose-built tour operating company that helps our worthy clients in searching for inner peace through exploring the hidden traces of happiness in mother nature. Women/men is by nature ‘gypsy’ with the innate sense of exploring nature and  extending the frontiers of self satisfaction. Our team is trained to help you in exploring the ‘gypsy’ in you and liberate you from the clutches of the orderly  to the vastness of free nature. 
  Pakistan is blessed with the richness of nature, climate and cultural heritage. The high mountains of the North, green foothills around Khyber Pakhtunkhwa, Kashmir and Potohar, cultivated plains of Punjab and Sindh, and the rugged deserts of Balochistan. The crossroad of Indus Civilization and Gandara Civilization make Pakistan rich in cultural traces. We sincerely try to show our clients their places of choice in Pakistan with the help of our experienced and well-groomed tour staff.
  Our team of Directors is a blend of professionals who bring unique experiences to our business and provide valuable input for better planning of our customized tours. A retired security management expert, a medical specialist, a senior lawyer, a retired teacher, a financial professional and a young tour organizer make up our core team. This team is available for hands on consultation on issues of mutual benefit/concern.
 Cultural tourism, religious tourism, ecological tourism, educational tourism, health tourism and alpine tracking are our domain of activities. We are visible on all types of social media platforms for information and easy contact.`,
  },
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
  const { root, title, affiliation } = useStyles();

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
        <p style={{ textAlign: "center" }}>We love to be authentic!</p>
        <div className={affiliation}>
          {affiliations.map((el, id) => {
            const imgSrc = `/affiliations/${el.imgUrl}`;
            const label = el.label;
            const siteLink = el.siteLink;
            return (
              <Link
                href={siteLink}
                key={id}
                underline="none"
                style={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "end",
                }}
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
