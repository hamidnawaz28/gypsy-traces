import { makeStyles } from "@mui/styles";
import { LinkedIn } from "@mui/icons-material";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      textAlign: "center",
      display: "flex",
      justifyContent: "space-around",
      padding: 20,
    },
    image: {
      borderRadius: "50%",
      width: 100,
      height: 100,
    },
  };
});

const Team = ({ team }) => {
  const { root, image } = useStyles();
  return (
    <div className={root}>
      {team.map((item) => {
        const { img, name, designation, linkedin } = item;
        return (
          <div>
            <img src={`/team/${img}`} alt={name} className={image} />
            <h3>{name}</h3>
            <p>{designation}</p>
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
