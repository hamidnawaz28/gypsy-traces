import { makeStyles } from "@mui/styles";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  SvgIcon,
  Link,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { CompanyLogo } from "../../components/icons";
import { Theme } from "@mui/system";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "black",
  },
  title: {
    flexGrow: 1,
    fontFamily: "Aller",
    color: "black",
    "& span:nth-child(1)": {
      color: theme.palette.primary.main,
    },
    "& span:nth-child(2)": {
      color: theme.palette.secondary.main,
    },
  },
  toolBar: {
    backgroundColor: "white",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
          >
            <CompanyLogo />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link href="/" underline="none">
              <span>Gypsy</span>
              <span>Traces</span>
            </Link>
          </Typography>
          <Link href="/" underline="none">
            <Button>Services</Button>
          </Link>
          <Link href="/about-us" underline="none">
            <Button>About Us</Button>
          </Link>

          <Link href="/contact-us" underline="none">
            <Button style={{ backgroundColor: "#F27171", color: "white" }}>
              Book Now
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
