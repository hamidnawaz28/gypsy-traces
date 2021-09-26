import React from "react";
import { makeStyles } from "@mui/styles";
// import Accordion from "./Accordion";
import { ExpandMore } from "@mui/icons-material";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
interface AppProps {
  dataArr: object[];
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

export default function AccordianGroup({ dataArr }: AppProps) {
  const { root } = useStyles();

  return (
    <div className={root}>
      {dataArr.forEach((item) => (
        <>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion disabled>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Disabled Accordion</Typography>
            </AccordionSummary>
          </Accordion>
        </>
      ))}
    </div>
  );
}
