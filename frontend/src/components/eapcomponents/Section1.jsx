import React from "react";
import "./section1.scss";
const Section1 = ({ img, title, lists }) => {
  return (
    <section className="eap_section1_container">
      <section className="left_image">
        <img src={img} alt="" />
      </section>
      <section className="right_content">
        <h1 className="heading">{title} </h1>
        <ol className="custom_list">
          {lists && lists.map((item, ind) => <li key={ind}>{item}</li>)}
        </ol>
      </section>
    </section>
  );
};

export default Section1;
