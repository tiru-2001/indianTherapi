import "./roundicon.scss";
const RoundIcon = ({ bg, icn }) => {
  return (
    <div
      className="roundicon_container"
      style={{
        background: ` var(${bg})`,
        fontSize: "1.5rem",
      }}
    >
      {icn}
    </div>
  );
};

export default RoundIcon;
