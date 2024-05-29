import "./contact.scss";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import configuredUrl from "../../utils/request/request";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    city: "",
    whatsapp: "",
    happylife: "",
  });

  const [error, setError] = useState("");
  const [exists, setExists] = useState(false);
  const [result, setResult] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    let timeoutId;
    if (result || exists) {
      timeoutId = setTimeout(() => {
        navigate("/");
      }, 10000);
    }
    return () => clearTimeout(timeoutId);
  }, [result, exists, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await configuredUrl.post("/contactform/uploadcontact", {
        formData,
      });
      if (data.success) {
        setExists(true);
        setError(false);
      } else if (!data.success) {
        setResult(true);
        setError(false);
        setExists(false);
      } else {
        setError(true);
        setExists(false);
      }
    } catch (e) {
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
                    id="name"
                    name="name"
                    value={formData.name}
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
                    id="email"
                    name="email"
                    value={formData.email}
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
                    id="country"
                    name="country"
                    value={formData.country}
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
                    id="city"
                    name="city"
                    value={formData.city}
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
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
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
                    id="happylife"
                    name="happylife"
                    value={formData.happylife}
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
          {exists && (
            <div>
              <h1>
                Your data already exists! Please wait for some time. Our team
                will get back to you.
              </h1>
            </div>
          )}
          {error && (
            <h1>Please fill all the required fields to submit the details.</h1>
          )}
        </>
      )}
    </>
  );
};

export default Contact;
