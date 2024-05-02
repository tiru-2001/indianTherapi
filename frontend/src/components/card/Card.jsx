import "./card.scss";

const Card = ({ data: { img, title, desc, height, width, section } }) => {
  return (
    <>
      <section className={"card_container"}>
        {section == 2 ? (
          <>
            {" "}
            <section className="img_section">
              <img
                src={img}
                style={{ height: `${height}px`, width: `${width}px` }}
                alt={title}
              />
            </section>
          </>
        ) : (
          <>
            {" "}
            <img
              src={img}
              style={{ height: `${height}px`, width: `${width}px` }}
              alt={title}
            />
          </>
        )}
        <h3>{title}</h3>
        <p>{desc}</p>
      </section>
    </>
  );
};

export default Card;
