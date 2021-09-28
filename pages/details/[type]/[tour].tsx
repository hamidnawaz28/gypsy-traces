import { NextPage } from "next";
import styles from "../../../styles/Home.module.css";
import { useTranslation } from "react-i18next";

import { Seo } from "../../../components/seo";
import { Footer } from "../../../containers/footer";
import { useRouter } from "next/router";
import { AccordionGroup } from "../../../components/accordion";
import enUS from "../../../components/internationalization/en-US.json";

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
  const itinerary = filteredTour?.itinerary;
  return (
    <>
      <Seo
        description="Home package for travel packages"
        title="Home"
        siteTitle="Gypsy Traces"
      />
      <main>
        <AccordionGroup dataArr={itinerary} />
      </main>
      <Footer />
    </>
  );
};

export default Details;
