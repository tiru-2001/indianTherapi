import "./rightcontent.scss";
import {
  ImManWoman,
  IoManSharp,
  MdGppGood,
  FaPeopleGroup,
} from "../../assets/icons/index";

import { CounselingItems } from "../index";
import { Button } from "../index";
import { Link } from "react-router-dom";
const RightContent = ({ subtitle, title, desc, content_items, btn_text }) => {
  const icon = [
    <ImManWoman />,
    <FaPeopleGroup />,
    <IoManSharp />,
    <MdGppGood />,
  ];
  return (
    <>
      <section className="right_content">
        <section className="right_content_heading">
          <h5>Who we are</h5>
          <h2 className="sub_heading">{title}</h2>
        </section>
        <p>{desc}</p>
        <section className="counseling_types">
          {content_items.map((item, ind) => (
            <CounselingItems
              key={ind}
              icon={icon[ind]}
              title={item.title}
              desc={item.desc ? item.desc : ""}
            />
          ))}
        </section>
        <Link to="/top-therapists">
          <Button title={btn_text} bg={"--button-bg"} />
        </Link>
      </section>
    </>
  );
};

export default RightContent;
