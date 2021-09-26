import React from "react";
import { makeStyles } from "@mui/styles";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  SvgIcon,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { CompanyLogo } from "../../components/icons";
const useStyles = makeStyles((theme) => ({
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
    color: "black",
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
            {/* <CompanyLogo /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Gypsy Traces
          </Typography>
          <Button> Services </Button>
          <Button> Contact Us </Button>
          <Button> About Us </Button>

          <Button style={{ backgroundColor: "#F27171", color: "white" }}>
            {" "}
            Book Now
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
