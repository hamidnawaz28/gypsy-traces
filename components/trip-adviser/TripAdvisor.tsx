import { makeStyles } from "@mui/styles";
import { Link } from "@mui/material";

import { Theme } from "@mui/system";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
}));

export default function TripAdvisor() {
  const { root } = useStyles();

  return (
    <div className={root}>
      <div id="TA_rated722" className="TA_rated">
        <ul id="A8WkCMrKCXS" className="TA_links qmeP0x4AKNf">
          <li id="rIpDZvV4YQo1" className="y9WcbA5Uan">
            <Link
              target="_blank"
              href="https://www.tripadvisor.com/Attraction_Review-g293960-d23722322-Reviews-Gypsy_Traces_Tours-Islamabad_Islamabad_Capital_Territory.html"
            >
              <img
                src="https://www.tripadvisor.com/img/cdsi/img2/badges/ollie-11424-2.gif"
                alt="Trip Advisor"
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
    </div>
  );
}
