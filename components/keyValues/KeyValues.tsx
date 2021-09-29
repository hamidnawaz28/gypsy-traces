const KeyValues = ({ title, data }) => {
  return (
    <div>
      <h3>{title}</h3>
      {Object.keys(data)?.map((item, id) => {
        return (
          <div key={id}>
            <span>{item}</span>
            {" : "}
            <span>{data[item]}</span>
          </div>
        );
      })}
    </div>
  );
};
export default KeyValues;
