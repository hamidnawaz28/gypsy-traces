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

  const whatsAppLink = "https://wa.me/qr/I37QMGAGKDOOA1";
  const waMessage = "scan or click";
  const wAQrUrl = "/others/qr-code.png";
  const mail = "info.gypsytours@gmail.pk";
  const mapUrl = "/others/pakistan-map.png";
  const contacts = ["+923005429539", "+923129936266"];
  return (
    <div>
      <Seo
        description="Home package for travel packages"
        title="Contact"
        siteTitle="Gypsy Traces"
      />
      <main>
        <img src={mapUrl} width="100%" alt="Pakistan Map" />
        <div className={root}>
          <h1>Contact Us!</h1>
          <div>
            <div>
              <a href={whatsAppLink} target="_black">
                <h4>WhatsApp</h4>
                <img src={wAQrUrl} alt="" width="300px" />
                <p>{waMessage}</p>
              </a>
            </div>
            <div>
              <h4>Email</h4>
              <p>{mail}</p>
            </div>
            <div>
              <h4>Call</h4>
              {contacts.map((item, id) => (
                <p key={id}>{item}</p>
              ))}
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
