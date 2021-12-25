import { Zoom, Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const images = [
  "hussaini-suspension-bridge",
  "derawar-fort",
  "hunza",
  "khander",
  "kalash-festival",
];

const properties = {
  canSwipe: true,
  scale: 0.4,
  duration: 2000,
  pauseOnHover: false,
  arrows: true,
  indicators: false,
  easing: "cubic-in",
};

const HomeAnimation = () => {
  return (
    <div>
      <Fade {...properties}>
        {images.map((each, index) => (
          <img
            key={index}
            style={{ width: "100%" }}
            src={`/homepage/${each}.jpg`}
            loading="lazy"
          />
        ))}
      </Fade>
    </div>
  );
};

export default HomeAnimation;
