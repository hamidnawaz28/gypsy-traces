// import { Zoom, Fade } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";
import { ReactPictureGrid } from "react-picture-grid";

// const images = [
//   "hussaini-suspension-bridge",
//   "derawar-fort",
//   "hunza",
//   "khander",
//   "kalash-festival",
// ];

// const properties = {
//   canSwipe: true,
//   scale: 0.4,
//   duration: 2000,
//   pauseOnHover: false,
//   arrows: true,
//   indicators: false,
//   easing: "cubic-in",
// };

// const HomeAnimationSpare = () => {
//   return (
//     <div>
//       <Fade {...properties}>
//         {images.map((each, index) => (
//           <img
//             key={index}
//             style={{ width: "100%" }}
//             src={`/homepage/${each}.jpg`}
//             loading="lazy"
//           />
//         ))}
//       </Fade>
//     </div>
//   );
// };
const data = [
  {
    image: "/homepage/hussaini-suspension-bridge.jpg",
    title: "Hussaini Suspension Bridge",
    description: "The dangerous rope bridge in Hunza",
  },
  // {
  //   image: "/homepage/derawar-fort.jpg",
  //   title: "Derawar Fort",
  //   description: "One of the beautiful fort in Pakistan",
  // },
  // {
  //   image: "/homepage/hunza.jpg",
  //   title: "Hunza",
  //   description: "Snow covered mountaines in Hunza valley",
  // },
  // {
  //   image: "/homepage/khander.jpg",
  //   title: "Khander",
  //   description: "Memories from just a 5000 years ago",
  // },
  {
    image: "/homepage/kalash-festival.jpg",
    title: "Kalash Festival",
    description: "A colorful festival in Chitral",
  },
];
const HomeAnimation = () => {
  return (
    <div>
      <ReactPictureGrid data={data} showTitle gap={10} />
    </div>
  );
};
export default HomeAnimation;
