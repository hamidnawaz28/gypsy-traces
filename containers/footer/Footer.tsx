import styles from "../../styles/Home.module.css";
import { Grid, Typography, Link } from "@mui/material";
import {
  Facebook,
  YouTube,
  Instagram,
  WhatsApp,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

const useStyles = makeStyles((theme: Theme) => {
  return {
    footer: {
      width: "100%",
      borderTop: "1px solid #eaeaea",
      backgroundColor: theme.palette.primary.main,
      color: "white",
      paddingTop: 10,
    },
    footerContainer: {
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& p, h3": {
        paddding: 0,
        margin: 5,
        textTransform: "uppercase",
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: "medium",
        letterSpacing: "20%",
      },
    },
    copyright: {
      textTransform: "uppercase",
      fontSize: 10,
    },
    link: {
      color: "white",
    },
    grid: {
      [theme.breakpoints.down("sm")]: {
        padding: 10,
      },
    },
  };
});

const siteLinks: any = [
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Contact",
    href: "/contact-us",
  },
  {
    label: "FAQ's",
    href: "/faqs",
  },
];

const email = "info.grpsytours@gmail.com";
const waLink = "https://wa.me/message/BQNERPAFPKHYE1";
const qrUrl = "./others/qr-code.jpg";
const qrAlt = "Gypsy Traces QR";
const address = [
  "Flat 6D/1, Askari Towers-II",
  "Sector D, DHA-II, Islamabad Pakistan",
];

export default function Footer() {
  const { grid, footer, copyright, footerContainer, link } = useStyles();

  const icons: any = [
    {
      icon: <Facebook fontSize="large" />,
      url: "https://www.facebook.com/GypsyTracesAndTours",
    },
    {
      icon: <Instagram fontSize="large" />,
      url: "http://www.instagram.com/gypsytours.pk",
    },
    {
      icon: <WhatsApp fontSize="large" />,
      url: "https://wa.me/message/BQNERPAFPKHYE1",
    },
    {
      icon: <YouTube fontSize="large" />,
      url: "https://www.youtube.com/channel/UC8-2Mh1V_U5LHWFrMZbAPvw",
    },
    {
      icon: <LinkedIn fontSize="large" />,
      url: "https://www.linkedin.com/in/gypsy-traces-and-tours-b9269b222/",
    },
    {
      icon: <Twitter fontSize="large" />,
      url: "https://twitter.com/GypsyTourspk",
    },
  ];

  return (
    <footer className={footer}>
      <Grid container className={footerContainer}>
        <Grid xs={6} sm={6} md={3} lg={3} xl={3} item className={grid}>
          <h3>Location</h3>
          {address.map((el, id) => (
            <p key={id}>{el}</p>
          ))}
        </Grid>
        <Grid xs={6} sm={6} md={3} lg={3} xl={3} item className={grid}>
          <h3>Social Media</h3>
          {icons.map((el: any, id: number) => {
            const { url, icon } = el;
            return (
              <Link href={url} target="_blank" className={link} key={id}>
                {icon}
              </Link>
            );
          })}
        </Grid>
        <Grid xs={6} sm={6} md={3} lg={3} xl={3} item className={grid}>
          <h3>Links</h3>
          {siteLinks.map((item: any, id: number) => {
            return (
              <p key={id}>
                <Link
                  href={item.href}
                  target="_blank"
                  className={link}
                  underline="none"
                >
                  {item.label}
                </Link>
              </p>
            );
          })}
        </Grid>
        <Grid xs={6} sm={6} md={3} lg={3} xl={3} item className={grid}>
          <h3>Contact</h3>
          <a href={waLink} target="_black">
            <img src={qrUrl} alt={qrAlt} width="60px" height="60px" />
          </a>
          <p style={{ textDecoration: "none" }}>{email}</p>
        </Grid>
      </Grid>
      <Typography align="center" className={copyright}>
        @Copyright! All Rights Reserved 2021
      </Typography>
    </footer>
  );
}
