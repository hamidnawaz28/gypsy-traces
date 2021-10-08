import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
const useStyles = makeStyles((theme) => {
  return {
    root: {
      position: "relative",
    },
    imageTitle: {
      margin: 0,
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      color: theme.palette.text.secondary,
      backgroundColor: "rgb(0,0,0,0.5)",
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        fontSize: 14,
        fontWeight: theme.typography.fontWeightRegular,
        padding: 1,
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: 18,
        fontWeight: theme.typography.fontWeightLight,
        padding: 15,
      },
    },
  };
});

interface ImageInterface {
  src: string;
  title: string;
}

const MainImage = ({ src, title }: ImageInterface) => {
  const { root, imageTitle } = useStyles();
  return (
    <div className={root}>
      <img src={src} width="100%"></img>
      <Typography className={imageTitle}>{title}</Typography>
    </div>
  );
};
export default MainImage;
