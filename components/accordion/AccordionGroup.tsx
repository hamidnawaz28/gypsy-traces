import { makeStyles } from "@mui/styles";
import Accordion from "./Accordion";
import { ExpandMore } from "@mui/icons-material";
import { Timeline } from "../timeline";
import { Timeline as TimelineWrap } from "@mui/lab";
interface AppProps {
  dataArr: object[];
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    margin: "auto",
    "@global": {
      ".MuiTimelineOppositeContent-positionRight": {
        display: "none",
      },
    },
  },
}));

export default function AccordianGroup({ dataArr }: AppProps) {
  const { root } = useStyles();

  return (
    <div className={root}>
      <TimelineWrap position="right">
        {dataArr?.map((item, key) => (
          <Timeline key={key} day={item.day}>
            <Accordion
              title={item.title}
              activities={item.activities}
              id={key}
              day={item.day}
            />
          </Timeline>
        ))}
      </TimelineWrap>
    </div>
  );
}
