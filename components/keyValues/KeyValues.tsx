import tourLogos from "../icons/tourLogos";

const KeyValues = ({ title, data, logo }) => {
  return (
    <div>
      <h3>
        <span style={{ verticalAlign: "text-top" }}>{logo}</span>
        <span style={{ verticalAlign: "middle", paddingLeft: "10px" }}>
          {title}
        </span>
      </h3>
      {Object.keys(data)?.map((item, id) => {
        return (
          <div key={id} style={{ padding: 5 }}>
            <span style={{ verticalAlign: "text-top" }}>
              {tourLogos[item] || "-"}
            </span>
            <span style={{ verticalAlign: "middle", paddingLeft: "10px" }}>
              {data[item]}
            </span>
          </div>
        );
      })}
    </div>
  );
};
export default KeyValues;
