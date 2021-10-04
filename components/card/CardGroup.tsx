import Card from "./Card";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CategoryHeader } from "../../containers/categoryHeader";

const useStyles = makeStyles({
  root: {
    padding: "20px 0px",
  },
  trekContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
  },
});

interface AppProps {
  dataArr: object;
}

export default function CardGroup({ dataArr }: AppProps) {
  const { root, trekContainer } = useStyles();
  const categories: string[] = Object.keys(dataArr);

  return categories.map((item) => {
    const { title, url: typeUrl, details } = dataArr[item];

    return (
      <Grid className={root}>
        {details.length > 0 && <CategoryHeader title={title} />}
        <Grid container className={trekContainer}>
          {details.map((item) => {
            const {
              title: cardTitle,
              description,
              thumbnailImage,
              url: packageUrl,
            } = item;
            return (
              <Card
                title={cardTitle}
                details={description}
                imgSrc={thumbnailImage}
                typeUrl={typeUrl}
                packageUrl={packageUrl}
              />
            );
          })}
        </Grid>
      </Grid>
    );
  });
}
