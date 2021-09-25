import type { NextPage } from "next";
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

  return (
    <div className={styles.container}>
      <Seo
        description="Home package for travel packages"
        title="Home"
        siteTitle="Gypsy Traces"
      />
      <main className={styles.main}>
        <h1>Data</h1>
        <AccordionGroup dataArr={[{ title: "data", details: "data" }]} />
      </main>
      <Footer />
    </div>
  );
};

export default Details;
