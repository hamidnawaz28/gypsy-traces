import { NextPage } from "next";
import { makeStyles } from "@mui/styles";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

type AccordianProps = {
  title: string;
  details: string;
};

const useStyles = makeStyles((theme) => ({
  heading: {
    // fontSize: theme.typography.pxToRem(15),
    // fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion({
  title,
  activities,
}: AccordianProps): NextPage {
  const classes = useStyles();
  const { heading } = classes;

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={heading}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{activities}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
