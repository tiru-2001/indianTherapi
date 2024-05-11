import "./contact.scss";
import React, { useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    city: "",
    whatsapp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log("Form data submitted: ", formData);
    // You can add further logic for handling the form submission
  };
  return (
    <>
      <div className="contact_container">
        <h1>
          Contact Us for Best Online Therapy with Indian Therapists and
          Dietitians
        </h1>
        <p>
          Thank you for taking a step towards a happy and healthy life abroad.
          Please fill out the form below, and our team will reach out to you
          within the next 24 hours to coordinate your appointment.
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
                id="happyLife"
                name="happyLife"
                value={formData.happyLife}
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
  );
};

export default Contact;
