import { makeStyles } from "@mui/styles";
import Accordion from "./Accordion";
import { ExpandMore } from "@mui/icons-material";

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
      {dataArr.map((item) => (
        <Accordion title={item.title} activities={item.activities} />
      ))}
    </div>
  );
}
