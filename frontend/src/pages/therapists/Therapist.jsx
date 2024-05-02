import "./therapist.scss";
import { doctorCard } from "../../utils/booking/index";
import { Category, DoctorCard } from "../../components";
import { useState, useEffect } from "react";
import configuredUrl from "../../utils/request/request";
const Therapist = () => {
  const [therapist, setTherapist] = useState("");

  const getAllTherapist = async () => {
    try {
      const { data } = await configuredUrl.get("/therapist/get-therapist");
      console.log(data);
      if (data.success) {
        setTherapist(data.allTherapist);
      }
    } catch (e) {
      console.log("error");
      console.log(e);
    }
  };
  useEffect(() => {
    getAllTherapist();
  }, []);
  return (
    <section className="doctors_container">
      <section className="top1">
        <Category />
      </section>
      <section className="bottom">
        {therapist &&
          therapist?.map((item, ind) => <DoctorCard item={item} key={ind} />)}
      </section>
    </section>
  );
};

export default Therapist;
