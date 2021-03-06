import { NextPage } from "next";
import { Seo } from "../components/seo";
import { useTranslation } from "react-i18next";
import { Footer } from "../containers/footer";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {},
  };
});

const FAQs: NextPage = () => {
  const { t, i18n } = useTranslation();
  const { root } = useStyles();

  return (
    <div>
      <Seo
        description="Home package for travel packages"
        pageTitle="FAQ"
        contentTitle={
          "FAQ about gypsy tours, traveling to Pakistan and our tour packages."
        }
        pageUrl={`faqs`}
      />

      <main className={root}>FAQs</main>

      <Footer />
    </div>
  );
};

export default FAQs;
