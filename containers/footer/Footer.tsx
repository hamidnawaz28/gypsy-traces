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

const useStyles = makeStyles((theme) => {
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

export default function Footer() {
  const { grid } = useStyles();
  const GridWrap = ({ children }) => (
    <Grid {...breakpoints} item className={grid}>
      {children}
    </Grid>
  );

  const { footer, copyright, footerContainer, link } = useStyles();
  return (
    <footer className={footer}>
      <Grid container className={footerContainer}>
        <GridWrap>
          <h3>Location</h3>
          <p>Office xxx, Example Town</p>
          <p>Islamabad (ICT) Pakistan</p>
        </GridWrap>
        <GridWrap>
          <h3>Social Media</h3>
          <Link href="http://www.facebook.com" target="_blank" className={link}>
            <Facebook />
          </Link>
          <Link
            href="http://www.instagram.com"
            target="_blank"
            className={link}
          >
            <Instagram />
          </Link>
          <Link href="http://www.youtube.com" target="_blank" className={link}>
            <YouTube />
          </Link>
          <Link
            href="https://wa.me/qr/I37QMGAGKDOOA1"
            target="_blank"
            className={link}
          >
            <WhatsApp />
          </Link>
        </GridWrap>
        <GridWrap>
          <h3>Links</h3>
          <p>
            <Link
              href="/about-us"
              target="_blank"
              className={link}
              underline="none"
            >
              About Us
            </Link>
          </p>
          <p>
            <Link
              href="/contact-us"
              target="_blank"
              className={link}
              underline="none"
            >
              Contact
            </Link>
          </p>
        </GridWrap>
        <GridWrap>
          <h3>Contact</h3>
          <a href="https://wa.me/qr/I37QMGAGKDOOA1" target="_black">
            <img src="/others/qr-code.jpeg" alt="" width="60px" height="60px" />
          </a>
          <p style={{ textDecoration: "none" }}>sales@grpsytraces.pk</p>
        </GridWrap>
      </Grid>
      <Typography align="center" className={copyright}>
        @Copyright! All Rights Reserved 2021
      </Typography>
    </footer>
  );
}
