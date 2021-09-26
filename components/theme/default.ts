import { makeStyles } from "@mui/material";

const useStyles = makeStyles((theme) => {
  return {
    button: {
      backgroundColor: theme.palette.secondary.main,
    },
    heading: {},
    subHeading: {},
    title: {},
    paragraph: {},
    importantNote: {},
  };
});

export default useStyles;
