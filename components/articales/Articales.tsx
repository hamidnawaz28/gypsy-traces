interface HeadingInterface {
  text: string;
}
interface ParagraphInterface {
  text: string;
}

const HeadingComponent = ({ text }: HeadingInterface) => {
  return <h1>{text}</h1>;
};

const ParagraphComponent = ({ text }: ParagraphInterface) => {
  return <p>{text}</p>;
};

const Elements = {
  heading: function Heading({ text }: HeadingInterface) {
    return <HeadingComponent text={text} />;
  },
  subHeading: function SubHeading({ text }: HeadingInterface) {
    return <HeadingComponent text={text} />;
  },
  paragraph: function Paragraph({ text }: HeadingInterface) {
    return <HeadingComponent text={text} />;
  },
  bullet: function Bullet({ text }: HeadingInterface) {
    return <HeadingComponent text={text} />;
  },
};

const articale = {
  heading: Elements.heading({ text: "hello" }),
};

const Articales = () => {
  return <div>{articale.heading}</div>;
};

export default Articales;
