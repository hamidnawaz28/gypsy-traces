import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Seo } from "../components/seo";
import { Link } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Card } from "../components/card";
import { Footer } from "../containers/footer";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import { WhatsApp } from "@mui/icons-material";

const useStyles = makeStyles((theme: Theme) => {
  return {
    centerAll: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
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
  const { root, contact, centerAll } = useStyles();

  const whatsAppLink = "https://wa.me/message/BQNERPAFPKHYE1";
  const waMessage = "Scan or click below!";
  const wAQrUrl = "./others/qr-code.jpg";
  const mail = "info.gypsytours@gmail.pk";
  const mapUrl = "./others/pakistan-map.PNG";
  const contacts = ["+923005429539", "+923129936266"];
  return (
    <div>
      <Seo
        description="Home package for travel packages"
        pageTitle="Contact"
        contentTitle={"Contact page of gypsy tours"}
        pageUrl={`contact-us`}
      />
      <main className={centerAll}>
        <img src={mapUrl} width="100%" alt="Pakistan Map" />
        <div className={root}>
          <h1>Contact Us!</h1>
          <div>
            <div className={centerAll}>
              <a href={whatsAppLink} target="_black">
                <h4>WhatsApp</h4>
                <img src={wAQrUrl} alt="" width="300px" />
                <p>{waMessage}</p>
              </a>
              <div
                style={{
                  color: "#06d755",
                  padding: "5px 10px",
                  border: "2px solid #06d755",
                  borderRadius: "5px",
                  width: "170px",
                }}
              >
                <Link
                  href={whatsAppLink}
                  underline="none"
                  color="inherit"
                  target="_blank"
                >
                  Open WhatsApp{"  "}
                  <WhatsApp
                    style={{ verticalAlign: "middle", color: "#06d755" }}
                  />
                </Link>
              </div>
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
        <div id="TA_rated722" className="TA_rated">
          <ul id="A8WkCMrKCXS" className="TA_links qmeP0x4AKNf">
            <li id="rIpDZvV4YQo1" className="y9WcbA5Uan">
              <Link
                target="_blank"
                href="https://www.tripadvisor.com/Attraction_Review-g293960-d23722322-Reviews-Gypsy_Traces_Tours-Islamabad_Islamabad_Capital_Territory.html"
              >
                <img
                  src="https://www.tripadvisor.com/img/cdsi/img2/badges/ollie-11424-2.gif"
                  alt="TripAdvisor"
                />
              </Link>
            </li>
          </ul>
        </div>
        {/* <div id="TA_socialButtonBubbles662" className="TA_socialButtonBubbles">
          <ul id="EeepBk" className="TA_links JHIB2pF3U">
            <li id="sAJoEKAbFbGz" className="W1IagOUqAPh">
              <Link
                target="_blank"
                href="https://www.tripadvisor.com/Attraction_Review-g293960-d23722322-Reviews-Gypsy_Traces_Tours-Islamabad_Islamabad_Capital_Territory.html"
              >
                <img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logomark.svg" />
              </Link>
            </li>
          </ul>
        </div> */}
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
