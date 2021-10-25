import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

const globalClasses = makeStyles((theme: any) => {
  return {
    button: {
      backgroundColor: theme.palette.secondary.main,
    },
    headingText: {
      [theme.breakpoints.down("xs")]: {
        fontSize: 13,
        fontWeight: theme.typography.fontWeightLight,
        padding: 3,
      },
      [theme.breakpoints.between("xs", "sm")]: {
        fontSize: 14,
        fontWeight: theme.typography.fontWeightLight,
        padding: 6,
      },
      [theme.breakpoints.between("sm", "md")]: {
        fontSize: 15,
        fontWeight: theme.typography.fontWeightRegular,
        padding: 9,
      },
      [theme.breakpoints.between("md", "lg")]: {
        fontSize: 16,
        fontWeight: theme.typography.fontWeightRegular,
        padding: 12,
      },
      [theme.breakpoints.between("lg", "xl")]: {
        fontSize: 17,
        fontWeight: theme.typography.fontWeightMedium,
        padding: 15,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 18,
        fontWeight: theme.typography.fontWeightMedium,
        padding: 18,
      },
    },
    subHeadingText: {},
    title: {},
    paragraph: {},
    importantNote: {},
  };
});

export default globalClasses;
