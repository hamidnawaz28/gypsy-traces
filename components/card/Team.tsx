import { makeStyles } from "@mui/styles";
import { LinkedIn } from "@mui/icons-material";
import { Theme } from "@mui/system";

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      textAlign: "center",
      display: "flex",
      justifyContent: "space-between",
      padding: 20,
    },
    image: {
      borderRadius: "50%",
      [theme.breakpoints.down("sm")]: {
        width: 60,
        height: 60,
      },
      [theme.breakpoints.up("sm")]: {
        width: 100,
        height: 100,
      },
    },
  };
});

const Team = ({ team }) => {
  const { root, image } = useStyles();
  return (
    <div className={root}>
      {team.map((item, id) => {
        const { img, name, designation, linkedin } = item;
        return (
          <div key={id}>
            <img src={`/team/${img}`} alt={name} className={image} />
            <h3 style={{ textAlign: "center" }}>{name}</h3>
            <p style={{ textAlign: "center" }}>{designation}</p>
            <a href={`https://www.linkedin.com/in/${linkedin}/`}>
              <LinkedIn style={{ fontSize: 30, color: "blue" }} />
            </a>
          </div>
        );
      })}
    </div>
  );
};
export default Team;
