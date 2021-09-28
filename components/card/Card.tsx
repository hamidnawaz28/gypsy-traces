import { NextPage } from "next";
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";
import { Button } from "@mui/material";
import Image from "next/image";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      padding: 10,
      margin: 10,
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
      [theme.breakpoints.between("sm", "lg")]: {
        width: "50%",
      },
      [theme.breakpoints.up("lg")]: {
        width: "25%",
      },
      border: `1px solid ${grey[200]}`,
      borderRadius: 5,
      backgroundColor: theme.palette.background.default,
    },
    cardImage: {
      width: "100%",
      [theme.breakpoints.down("xs")]: {
        height: "100px",
      },
      [theme.breakpoints.down("sm")]: {
        height: "150px",
      },
      [theme.breakpoints.up("sm")]: {
        height: "200px",
      },
      borderRadius: 3,
    },
  };
});

interface ImgCardProps {
  title: string;
  details: string;
  imgSrc: string;
}

export default function ImgCard({ title, details, imgSrc }: ImgCardProps) {
  const { root, cardImage } = useStyles();

  return (
    <div className={root}>
      <img src={imgSrc} className={cardImage} />
      <h4>{title}</h4>
      {/* <p>{details}</p> */}
      <Button color="primary" variant="contained" fullWidth>
        Details
      </Button>
    </div>
  );
}
