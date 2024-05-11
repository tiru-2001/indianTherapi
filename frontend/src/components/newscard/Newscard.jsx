import React from "react";
import "./newscard.scss";
function Newscard({ img, title, author, date, month, news, newstitle }) {
  return (
    <>
      <div className="outer_card">
        <div className="img">
          <img src={img} alt={title} />
        </div>
        <div className="card-date">
          <div className="number">{date}</div>
          <div className="month">{month}</div>
        </div>
        <div className="author">
          By
          <a href="#">{author}</a>
        </div>
        <div className="card_title">{newstitle}</div>
      </div>
    </>
  );
}

export default Newscard;
