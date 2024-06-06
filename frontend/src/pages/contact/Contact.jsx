import "./contact.scss";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import configuredUrl from "../../utils/request/request";
import { toast } from "react-toastify";
const Contact = () => {
  const [formdata, setformdata] = useState({
    names: "",
    email: "",
    country: "",
    city: "",
    whatsapp: "",
    happylife: "",
  });

  const [error, setError] = useState("");
  const [result, setResult] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata({
      ...formdata,
      [name]: value,
    });
  };

  useEffect(() => {
    let timeoutId;
    if (result) {
      timeoutId = setTimeout(() => {
        navigate("/");
      }, 10000);
    }
    return () => clearTimeout(timeoutId);
  }, [result, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await configuredUrl.post("/contactform/uploadcontact", {
        name: formdata.names,
        email: formdata.email,
        city: formdata.city,
        whatsapp: formdata.whatsapp,
        country: formdata.country,
        happylife: formdata.happylife,
      });
      console.log("data");
      console.log(data);
      if (data.success) {
        setError(false);
        toast.success(
          "form  submitted successfully we weill get back to you as soon possible"
        );
        setResult(data);
      }
    } catch (e) {
      console.log("error from contact");
      console.log(e);
      setError(true);
    }
  };

  return (
    <>
      {result ? (
        <div className="contact_container">
          <h1>You have succesffuly submitted your details.</h1>
          <br />
          <h1>Our member will get back to you shortly</h1>
        </div>
      ) : (
        <>
          <div className="contact_container">
            <h1>
              Contact Us for Best Online Therapy with Indian Therapists and
              Dietitians
            </h1>
            <p>
              Thank you for taking a step towards a happy and healthy life
              abroad. Please fill out the form below, and our team will reach
              out to you within the next 24 hours to coordinate your
              appointment.
            </p>
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <label htmlFor="name">
                    Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="names"
                    value={formdata.names}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="custom-input"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="email">
                    Email <span>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formdata.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="custom-input"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="country">
                    Country <span>*</span>
                  </label>
                  <select
                    name="country"
                    value={formdata.country}
                    onChange={handleChange}
                    className="custom-select"
                  >
                    <option value="">Select your country</option>
                    <option value="USA">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="Canada">Canada</option>

                    {/* Add more options as needed */}
                  </select>
                </div>
                <div className="input-group">
                  <label htmlFor="city">
                    City <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formdata.city}
                    onChange={handleChange}
                    placeholder="Enter your city"
                    className="custom-input"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="whatsapp">
                    WhatsApp Number with country code <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="whatsapp"
                    value={formdata.whatsapp}
                    onChange={handleChange}
                    placeholder="Enter your WhatsApp number with country code"
                    className="custom-input"
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="happyLife">
                    How can we help you lead a happy life? <span>*</span>
                  </label>
                  <textarea
                    name="happylife"
                    value={formdata.happylife}
                    onChange={handleChange}
                    placeholder="Enter your answer"
                    className="custom-textarea"
                  ></textarea>
                </div>
                <div className="button-submit">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Contact;
