import { NextPage } from "next";
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";
import { Button, Link } from "@mui/material";
import Image from "next/image";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      margin: 10,
      border: `1px solid ${grey[200]}`,
      borderRadius: 5,
    },
    content: {
      padding: 10,
      "& p": {
        padding: 0,
        margin: 0,
      },
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
      borderRadius: "5px 5px 0px 0px",
    },
  };
});

interface ImgCardProps {
  title: string;
  details: string;
  imgSrc: string;
  typeUrl: string;
  packageUrl: string;
}

export default function ImgCard({
  title,
  details,
  imgSrc,
  typeUrl,
  packageUrl,
  days,
}: ImgCardProps) {
  const { root, cardImage, content } = useStyles();
  const url = `/details/${typeUrl}/${packageUrl}`;
  return (
    <Link href={url} target={"_blank"} underline="none" color="inherit">
      <div className={root}>
        <img src={imgSrc} className={cardImage} />
        <div className={content}>
          <p>
            {"Days. "}
            {days}
          </p>
          <h4>{title}</h4>
        </div>
      </div>
    </Link>
  );
}
