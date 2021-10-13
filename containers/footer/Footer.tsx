import styles from "../../styles/Home.module.css";
import { Grid, Typography, Link } from "@mui/material";
import {
  Facebook,
  YouTube,
  Instagram,
  Telegram,
  WhatsApp,
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
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

const breakpoints = {
  xs: 6,
  sm: 6,
  md: 3,
  lg: 3,
  xl: 3,
};

const links: any = {
  facebook: "http://www.facebook.com",
  instagram: "http://www.instagram.com",
  whatsapp: "https://wa.me/message/BQNERPAFPKHYE1",
  youtube: "http://www.youtube.com",
};

const siteLinks: any = [
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Contact",
    href: "/contact-us",
  },
];
const email = "info.grpsytours@gmail.pk";
const waLink = "https://wa.me/message/BQNERPAFPKHYE1";
const address = [
  "Flat 6D/1, Askari Towers-II",
  "Sector D, DHA-II, Islamabad Pakistan",
];

export default function Footer() {
  const { grid } = useStyles();
  const GridWrap = ({ children }: any) => (
    <Grid {...breakpoints} item className={grid}>
      {children}
    </Grid>
  );

  const icons: any = {
    facebook: <Facebook />,
    instagram: <Instagram />,
    whatsapp: <WhatsApp />,
    youtube: <YouTube />,
  };

  const { footer, copyright, footerContainer, link } = useStyles();
  return (
    <footer className={footer}>
      <Grid container className={footerContainer}>
        <GridWrap>
          <h3>Location</h3>
          {address.map((el, id) => (
            <p key={id}>{el}</p>
          ))}
        </GridWrap>
        <GridWrap>
          <h3>Social Media</h3>
          {Object.keys(links).map((item: any, id: number) => {
            const url = links[item];
            return (
              <Link href={url} target="_blank" className={link} key={id}>
                {icons[item]}
              </Link>
            );
          })}
        </GridWrap>
        <GridWrap>
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
        </GridWrap>
        <GridWrap>
          <h3>Contact</h3>
          <a href={waLink} target="_black">
            <img src="/others/qr-code.png" alt="" width="60px" height="60px" />
          </a>
          <p style={{ textDecoration: "none" }}>{email}</p>
        </GridWrap>
      </Grid>
      <Typography align="center" className={copyright}>
        @Copyright! All Rights Reserved 2021
      </Typography>
    </footer>
  );
}
