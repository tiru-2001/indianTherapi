import RoundIcon from "../roundIcon/RoundIcon";
import "./counseling.scss";
const CounselingItems = ({ icon, title, desc }) => {
  return (
    <section className="counseling_container">
      <RoundIcon icn={icon} bg={"--icon-bg"} />
      <section>
        <h1>{title}</h1>
        {desc ? <p>{desc}</p> : <></>}
      </section>
    </section>
  );
};

export default CounselingItems;
