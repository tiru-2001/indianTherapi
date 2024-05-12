import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./appointment.scss";
import configuredUrl from "../../utils/request/request";
import Loader from "../../components/loader/Loader";
const Appointment = () => {
  const [therapist, setTherapist] = useState();

  const [formdata, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    date: "",
    country: "",
    gender: "",
  });
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const getIndividualDoctor = async () => {
    try {
      const { data } = await configuredUrl.get(
        `/therapist/get-individual-therapist/${id}`
      );

      console.log(data);
      setLoading(false);
      setTherapist(data.result);
    } catch (e) {
      setLoading(false);

      console.log("error");
      console.log(e);
    }
  };

  //submit
  const handleSubmit = async (e) => {
    setLoading(true);

    e.preventDefault();
    try {
      if (therapist) {
        const { data } = await configuredUrl.post("/pay/payment", {
          name: formdata.name,
          number: formdata.number,
          age: formdata.age,
          phone: formdata.phone,
          gender: formdata.gender,
          email: formdata.email,
          date: formdata.date,
          country: formdata.country,
          therapistname: therapist.name,
          amount: therapist.price,
        });
        console.log(data);

        if (data.success) {
          setFormData({
            name: "",
            phone: "",
            email: "",
            age: "",
            date: "",
            country: "",
            gender: "",
          });
          window.location.href = data.link;
        }
      }
    } catch (e) {
      setLoading(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        age: "",
        date: "",
        country: "",
        gender: "",
      });
      console.log(e);
    }
  };

  //onchange

  const formOnchange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    setLoading(true);
    getIndividualDoctor();
    document.title = "Appointment Page";
    const descriptionMeta = document.createElement("meta");
    descriptionMeta.name = "description";
    descriptionMeta.content =
      "Schedule appointments with IndiaTherapist's professional therapists to begin your journey towards better mental health.";
    const keywordsMeta = document.createElement("meta");
    keywordsMeta.name = "keywords";
    keywordsMeta.content =
      "IndiaTherapist, appointments, schedule, therapy, mental health";
    document.head.appendChild(descriptionMeta);
    document.head.appendChild(keywordsMeta);

    return () => {
      document.head.removeChild(descriptionMeta);
      document.head.removeChild(keywordsMeta);
    };
  }, [id]);
  console.log(formdata);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="booking_maincontainer">
          <h1 className="main_heading">
            Book an appointment for {therapist && therapist.name}
          </h1>
          <section className="therapist_details">
            <section className="img_section">
              <img
                src={`http://api.indiatherapist.com/uploads/${therapist?.image}`}
              />
            </section>
            <section className="content_section">
              <h1>{therapist?.name}</h1>
              <p>{therapist?.description}</p>
              <h3>{therapist?.location}</h3>
              <h3> {therapist?.experience} experience</h3>
              <h2>
                <span>{therapist?.price} $</span> per session
              </h2>
            </section>
          </section>
          <section className="booking_subcontainer">
            <form onSubmit={handleSubmit}>
              <section className="input_container">
                <label>
                  <h4>Date</h4>
                  <input onChange={formOnchange} name="date" type="date" />
                </label>
                <label>
                  <h4>Country</h4>
                  <input
                    placeholder="country"
                    onChange={formOnchange}
                    name="country"
                    type="text"
                  />
                </label>
                <label>
                  <h4>Name:</h4>
                  <input
                    onChange={formOnchange}
                    type="text"
                    name="name"
                    placeholder="name"
                  />
                </label>
                <label>
                  <h4>Phone:</h4>

                  <input
                    onChange={formOnchange}
                    type="number"
                    name="phone"
                    placeholder="phone"
                  />
                </label>
                <label>
                  <h4>Email:</h4>

                  <input
                    onChange={formOnchange}
                    type="email"
                    name="email"
                    placeholder="email"
                  />
                </label>
                <label>
                  <h4>Age:</h4>

                  <input
                    onChange={formOnchange}
                    type="number"
                    name="age"
                    placeholder="age"
                  />
                </label>
                <div className="radio_container">
                  <input
                    value="female"
                    onChange={formOnchange}
                    type="radio"
                    name="gender"
                  />{" "}
                  female
                  <input
                    value="male"
                    onChange={formOnchange}
                    type="radio"
                    name="gender"
                  />{" "}
                  male
                </div>
              </section>
              <button>Pay Now</button>
            </form>
          </section>
        </section>
      )}
    </>
  );
};

export default Appointment;
