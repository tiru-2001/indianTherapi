import "./addbtn.scss";
import { Link } from "react-router-dom";
const Addbtn = () => {
  return (
    <section className="btn_container">
      <Link className="addbtn" to="add-therapist">
        Add Therapist
      </Link>
      <Link className="addbtn" to="/add-dietician">
        Add Dietician
      </Link>
    </section>
  );
};

export default Addbtn;
