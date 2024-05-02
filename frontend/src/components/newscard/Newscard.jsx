import React from 'react'
import './newscard.scss'
import { Link } from 'react-router-dom'
function Newscard({ img, title, author, date,month, news, newstitle}) {
  return (
    <>
        <Link to={news}>
        <div className="outer_card">
            <div className="img">
                <img src={img} alt={title} />
            </div>
            <div className="card-date">
                <div className="number">{date}</div>
                <div className="month">{month}</div>
            </div>
            <div className="author">By
            <span>

                <a href="#">
                    {author}
                </a>
            </span>
            </div>
            <div className="card_title">{newstitle}</div>
        </div>
        </Link>
    </>
  )
}

export default Newscard