import React from "react";
import styles from "../../styles/Home.module.css";
import { Grid, Typography } from "@mui/material";
import { Facebook, YouTube, Instagram, Telegram } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    footer: {
      width: "100%",
      borderTop: "1px solid #eaeaea",
      backgroundColor: theme.palette.primary.main,
      color: "white",
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
  };
});

const breakpoints = {
  xs: 12,
  sm: 4,
  md: 4,
  lg: 4,
  xl: 4,
};

export default function Footer() {
  const GridWrap = ({ children }) => (
    <Grid {...breakpoints} item>
      {children}
    </Grid>
  );

  const { footer, copyright, footerContainer } = useStyles();
  return (
    <footer className={footer}>
      <Grid container className={footerContainer}>
        <GridWrap>
          <h3>Location</h3>
          <p>225/2, Gill Road</p>
          <p>Punjab Pakistan</p>
        </GridWrap>
        <GridWrap>
          <h3>Social Media</h3>
          <Facebook />
          <Instagram />
          <YouTube />
          <Telegram />
        </GridWrap>
        <GridWrap>
          <h3>More</h3>
          <p>About Us</p>
          <p>Contact</p>
        </GridWrap>
      </Grid>
      <Typography align="center" className={copyright}>
        @Copyright! All Rights Reserved 2021
      </Typography>
    </footer>
  );
}
