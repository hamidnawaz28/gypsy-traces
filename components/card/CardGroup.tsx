import Card from "./Card";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CategoryHeader } from "../../containers/categoryHeader";

interface AppProps {
  dataArr: object;
}

const useStyles = makeStyles({
  trekContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
  },
});

export default function CardGroup({ dataArr }: AppProps) {
  const { trekContainer } = useStyles();
  const categories: string[] = Object.keys(dataArr);

  return categories.map((item) => {
    const { title, details } = dataArr[item];

    return (
      <Grid>
        {details.length > 0 && <CategoryHeader title={title} />}
        <Grid container className={trekContainer}>
          {details.map((item) => {
            const { title: cardTitle, description, thumbnailImage } = item;
            return (
              <Card
                title={cardTitle}
                details={description}
                imgSrc={thumbnailImage}
              />
            );
          })}
        </Grid>
      </Grid>
    );
  });
}
