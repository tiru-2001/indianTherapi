import { Link } from "react-router-dom";
import "./doctor.scss";
import { FaLocationDot } from "react-icons/fa6";
const DoctorCard = ({ item }) => {
  return (
    <section className="doctor_card">
      <section className="card_image">
        <img src={`http://api.indiatherapist.com/uploads/${item?.image}`} />
      </section>
      <section className="card_content">
        <section className="card_heading">
          <h5>{item?.name}</h5>
          <p>{`${item?.description.slice(0, 30)}...`}</p>
        </section>
        <section className="card_middle">
          {/* {stars} */}
          <section className="card_location">
            <FaLocationDot />
            <p>{item?.location}</p>
          </section>
        </section>
        <section className="card_bottom">
          <p>{`Languages: ${item?.languages.join(",")}`}</p>
          <p> Experience:{item?.experience} </p>
          <strong>{item?.price} $ per session</strong>
        </section>
        <Link className="link" to={`/private/book-appointment/${item._id}`}>
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
