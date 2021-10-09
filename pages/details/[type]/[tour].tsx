import { NextPage } from "next";
import styles from "../../../styles/Home.module.css";
import { useTranslation } from "react-i18next";

import { Seo } from "../../../components/seo";
import { Footer } from "../../../containers/footer";
import { useRouter } from "next/router";
import { AccordionGroup } from "../../../components/accordion";
import enUS from "../../../components/internationalization/en-US.json";
import { Grid } from "@mui/material";
import { KeyValues } from "../../../components/keyValues";
import SimpleImageSlider from "react-simple-image-slider";
import { MainImage } from "../../../components/main-image";
import { CheckCircle, Cancel } from "@mui/icons-material";
import { Snapshot } from "../../../components/card";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    detailContainer: {
      padding: "1% 2%",
    },
    overview: {
      padding: "0px  20px",
    },
  };
});

const Details: NextPage = () => {
  const { t, i18n } = useTranslation();
  const data = t("title");
  const router = useRouter();
  const { type, tour } = router.query;
  const packages = enUS.translation.packages;
  const { overview, detailContainer } = useStyles();

  const typeData = Object.keys(packages).filter(
    (item) => packages[item].url == type
  )[0];
  const tours = packages[typeData]?.details;
  const filteredTour = tours?.filter((item) => item.url == tour)[0];
  const {
    whatsIncluded = [],
    whatsNotIncluded = [],
    itinerary = [],
    mainImageUrl = [],
    siteImagesUrl = [],
    days = "",
    pickUp = "",
    dropOff = "",
    description = "",
    title = "",
  } = filteredTour || [];

  const siteimages =
    siteImagesUrl?.map((item) => {
      return {
        url: item,
      };
    }) || [];

  return (
    <>
      <Seo
        description="Home package for travel packages"
        title="Details"
        siteTitle={title}
      />
      <main>
        <MainImage src={mainImageUrl} title={title} />

        <Grid container className={detailContainer}>
          <Grid item sm={8} className={overview}>
            <h3>Overview</h3>
            <p>{description}</p>
          </Grid>
          <Grid item sm={4}>
            <Snapshot days={days} from={pickUp} to={dropOff} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={6}>
            <AccordionGroup dataArr={itinerary} />
            {/* <SimpleImageSlider width={300} height={200} images={siteimages} /> */}
          </Grid>
          <Grid item sm={6} style={{ marginLeft: "auto" }}>
            <KeyValues
              title="Whats Included"
              data={whatsIncluded}
              logo={<CheckCircle color="success" />}
            />
            <KeyValues
              title="Whats Not Included"
              data={whatsNotIncluded}
              logo={<Cancel color="error" />}
            />
          </Grid>
        </Grid>
      </main>
      <Footer />
    </>
  );
};

export default Details;
