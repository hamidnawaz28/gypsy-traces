import Card from "./Card";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CategoryHeader } from "../../containers/categoryHeader";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      padding: "20px 0px",
    },
    trekContainer: {
      display: "grid",
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "auto",
      },
      [theme.breakpoints.between("sm", "lg")]: {
        gridTemplateColumns: "auto auto auto",
      },
      [theme.breakpoints.up("lg")]: {
        gridTemplateColumns: "25% 25% 25% 25%",
      },
      padding: 10,
    },
  };
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
              days,
              url: packageUrl,
            } = item;
            return (
              <Card
                title={cardTitle}
                details={description}
                imgSrc={thumbnailImage}
                typeUrl={typeUrl}
                packageUrl={packageUrl}
                days={days}
              />
            );
          })}
        </Grid>
      </Grid>
    );
  });
}
