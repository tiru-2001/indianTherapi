import "./termsandcond.scss";
import { termsAndCondition } from "../../utils/termsandconditions";
import { useEffect } from "react";

const Termsandcond = () => {
  useEffect(() => {
    document.title = "Terms and Conditions";
    const descriptionMeta = document.createElement("meta");
    descriptionMeta.name = "description";
    descriptionMeta.content =
      "Read IndiaTherapist's terms and conditions for using our platform and services.";
    const keywordsMeta = document.createElement("meta");
    keywordsMeta.name = "keywords";
    keywordsMeta.content =
      "IndiaTherapist, terms and conditions, usage policy, privacy policy, legal agreement";
    document.head.appendChild(descriptionMeta);
    document.head.appendChild(keywordsMeta);
    return () => {
      document.head.removeChild(descriptionMeta);
      document.head.removeChild(keywordsMeta);
    };
  }, []);
  return (
    <>
      <div className="termcontainer">
        <div className="subcontainer">
          <h2>Terms and Conditions</h2>
          <h1>
            Please read the below-mentioned Website Terms & Conditions carefully
            before availing the Services at the Website
          </h1>
          {termsAndCondition.map((item) => (
            <div className="contentbox">
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <h1>CONTACT INFORMATION:</h1>
        <p>Registered Address: Krishnagiri, Tamil Nadu - 635204</p>

        <p>Phone Number: +91-9384838353 </p>
        <p>
          E-mail:
          <a href="mailto:customerservice@indiatherapist.com">
            customerservice@indiatherapist.com
          </a>
        </p>
      </div>
    </>
  );
};

export default Termsandcond;
