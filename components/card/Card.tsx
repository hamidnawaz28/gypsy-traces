import React from "react";
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";
import Image from "next/image";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      padding: 10,
      margin: 10,
      width: "25%",
      border: `1px solid ${grey[200]}`,
      borderRadius: 5,
      backgroundColor: grey[100],
      // backgroundColor: theme.palette.primary.light,
    },
  };
});

interface ImgCardProps {
  title: string;
  details: string;
  imgSrc: string;
}

export default function ImgCard({ title, details, imgSrc }: ImgCardProps) {
  const { root } = useStyles();

  return (
    <div className={root}>
      <img src={imgSrc} width="100%" height="200px" />
      <h4>{title}</h4>
      <p>{details}</p>
    </div>
  );
}
