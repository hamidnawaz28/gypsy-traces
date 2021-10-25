import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import globalClasses from "../theme/globalClasses";
import { Theme } from "@mui/system";

const useStyles = makeStyles((theme: Theme) => {
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
    },
  };
});

interface ImageInterface {
  src: string;
  title: string;
}

const MainImage = ({ src, title }: ImageInterface) => {
  const { root, imageTitle } = useStyles();
  const { headingText } = globalClasses();
  return (
    <div className={root}>
      <img src={src} width="100%"></img>
      <Typography className={[imageTitle, headingText].join(" ")}>
        {title}
      </Typography>
    </div>
  );
};
export default MainImage;
