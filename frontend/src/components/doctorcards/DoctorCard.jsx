import { Link } from "react-router-dom";
import "./doctor.scss";
import { FaLocationDot } from "react-icons/fa6";
const DoctorCard = ({ item }) => {
  console.log(item);
  return (
    <section className="doctor_card">
      <section className="card_image">
        <img src={`http://localhost:8900/uploads/${item?.image}`} />
      </section>
      <section className="card_content">
        <section className="card_heading">
          <h5>{item?.name}</h5>
          <p>{item?.description}</p>
        </section>
        <section className="card_middle">
          {/* {stars} */}
          <section className="card_location">
            <FaLocationDot />
            <p>{item?.location}</p>
          </section>
        </section>
        <section className="card_bottom">
          <p>
            Language:{" "}
            {item.languages?.map((lang, ind) => {
              return <span key={ind}>{lang}</span>;
            })}
          </p>
          <p>{item.experience} Experience</p>
          <strong>{item?.price} Rs</strong>
        </section>
        <Link className="link" to="/private/booking">
          Book Now
        </Link>
      </section>
    </section>
  );
};

export default DoctorCard;

description: "marriage counselling";
languages: ["english"];
location: "Bengaluru";
name: "rahul";
