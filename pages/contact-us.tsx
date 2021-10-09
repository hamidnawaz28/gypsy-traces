import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Seo } from "../components/seo";
import { useTranslation } from "react-i18next";
import { Card } from "../components/card";
import { Footer } from "../containers/footer";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      textAlign: "center",
    },
    contact: {
      diplay: "grid",
      gridTemplateColumns: "50% 50%",
    },
  };
});
const ContactUs: NextPage = () => {
  const { t, i18n } = useTranslation();
  const { root, contact } = useStyles();

  return (
    <div>
      <Seo
        description="Home package for travel packages"
        title="Contact"
        siteTitle="Gypsy Traces"
      />
      <main>
        <img src="/others/pakistan-map.png" width="100%" alt="Pakistan Map" />
        <div className={root}>
          <h1>Contact Us!</h1>
          <div>
            <div>
              <a href="https://wa.me/qr/I37QMGAGKDOOA1" target="_black">
                <h4>WhatsApp</h4>
                <img src="/others/qr-code.jpeg" alt="" width="300px" />
              </a>
            </div>
            <div>
              <h4>Email</h4>
              <p>sales@grpsytraces.pk</p>
            </div>
            <div>
              <h4>Call</h4>
              <p>+92xx-xxxxxxx</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
