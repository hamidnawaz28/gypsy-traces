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

const Details: NextPage = () => {
  const { t, i18n } = useTranslation();
  const data = t("title");
  const router = useRouter();
  const { type, tour } = router.query;
  const packages = enUS.translation.packages;
  const typeData = Object.keys(packages).filter(
    (item) => packages[item].url == type
  )[0];
  const tours = packages[typeData]?.details;
  const filteredTour = tours?.filter((item) => item.url == tour)[0];
  const {
    whatsIncluded,
    whatsNotIncluded,
    itinerary,
    description,
    mainImageUrl,
    siteImagesUrl,
    days,
    pickUp,
    dropOff,
  } = filteredTour;
  const siteimages = siteImagesUrl.map((item) => {
    return {
      url: item,
    };
  });
  debugger;
  return (
    <>
      <Seo
        description="Home package for travel packages"
        title="Home"
        siteTitle="Gypsy Traces"
      />
      <main>
        <img src={mainImageUrl} width="100%" />
        <Grid container>
          <Grid item sm={8}>
            <h3>Overview</h3>
            <p>{description}</p>
          </Grid>
          <Grid item sm={4}>
            <p>Days: {days}</p>
            <div>
              <p>From : {pickUp}</p>
              <p>To : {dropOff}</p>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={6}>
            <AccordionGroup dataArr={itinerary} />
            <SimpleImageSlider width={300} height={200} images={siteimages} />
          </Grid>
          <Grid item sm={6}>
            <KeyValues title="Whats Included" data={whatsIncluded} />
            <KeyValues title="Whats Not Included" data={whatsNotIncluded} />
          </Grid>
        </Grid>
      </main>
      <Footer />
    </>
  );
};

export default Details;
