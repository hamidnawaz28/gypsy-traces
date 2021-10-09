import { makeStyles } from "@mui/styles";
import { CalendarToday, ArrowForwardIos } from "@mui/icons-material";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      borderRadius: 5,
      width: "90%",
      textAlign: "center",
      color: theme.palette.text.primary,
    },
    destination: {
      display: "grid",
      gridTemplateColumns: "40% 20% 40%",
    },
    details: {
      border: "1px solid",
      borderColor: theme.palette.primary.dark,
      padding: 5,
      borderRadius: 5,
      marginTop: 5,
    },
  };
});

interface SnapShotInterface {
  days?: string | number;
  from?: string;
  to?: string;
}

const SnapShot = ({ days, from, to }: SnapShotInterface) => {
  const { root, destination, details } = useStyles();
  return (
    <div className={root}>
      <div className={details}>
        <div style={{ textAlign: "left", paddingBottom: 5 }}>
          <CalendarToday />
          <span
            style={{
              verticalAlign: "top",
              paddingleft: 10,
              textDecoration: "underline",
            }}
          >
            {days}
            {" Days"}
          </span>
        </div>
        <div className={destination}>
          <div>
            <div></div>
            <div>From</div>
            <div>{from}</div>
          </div>
          <div style={{ margin: "auto" }}>
            <ArrowForwardIos color="secondary" />
          </div>
          <div>
            <div></div>
            <div>To</div>
            <div>{to}</div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default SnapShot;
