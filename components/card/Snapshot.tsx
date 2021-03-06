import { makeStyles } from "@mui/styles";
import { CalendarToday, ArrowForwardIos } from "@mui/icons-material";
import { Theme } from "@mui/system";

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      borderRadius: 5,
      width: "90%",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        padding: "0px 20px",
      },
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
              padding: "0px 0px 0px 10px",
              textDecoration: "underline",
            }}
          >
            {days}
            {" Days"}
          </span>
        </div>
        <div className={destination}>
          <div>
            <div>{from}</div>
          </div>
          <div style={{ margin: "auto" }}>
            <ArrowForwardIos color="secondary" />
          </div>
          <div>
            <div>{to}</div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default SnapShot;
