import { Zoom } from "react-slideshow-image";
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
};

const HomeAnimation = () => {
  return (
    <div>
      <Zoom {...properties}>
        {images.map((each, index) => (
          <img
            key={index}
            style={{ width: "100%" }}
            src={`/homepage/${each}.jpg`}
          />
        ))}
      </Zoom>
    </div>
  );
};

export default HomeAnimation;
