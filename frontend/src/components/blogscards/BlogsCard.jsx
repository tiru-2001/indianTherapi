import "./blogscards.scss";
import { Link } from "react-router-dom";
const BlogsCard = ({ item }) => {
  const { imageUrl, title, content, slug, author, createdAt } = item;
  console.log(createdAt);
  const data = createdAt.split("-");
  const month = data[0];
  const date = data[1];
  return (
    <Link to={`/blog/${slug}`}>
      <section className="outer_card">
        <section className="img">
          <img src={imageUrl} />
        </section>
        <section className="content">
          <div className="creds">
            <h1 className="title1">{title}.</h1>

            <h1 className="author1">{author}</h1>
          </div>

          <p>{`${content.slice(0, 200)}.....`}</p>
          <h1 className="date1">{month + " " + date + ""}</h1>
        </section>
      </section>
    </Link>
  );
};

export default BlogsCard;
