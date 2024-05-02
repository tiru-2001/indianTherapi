import "./eap.scss";
import { section1_utils, eap_features } from "../../utils/eaputils";
import Section1 from "../../components/eapcomponents/Section1";
import { Link } from "react-router-dom";

export default function Eap() {
  return (
    <section className="eap_container">
      {/* section1 */}

      <section className="section1_container">
        <section className="left">
          <section className="left_top_content">
            <h1 className="left_heading">
              Best Employee Assistance Program (EAP) Provider PAN INDIA
            </h1>
            <h4>
              #1 Mental Health Wellness Provider For Corporates. Top Employee
              Wellness Programs
            </h4>
          </section>
          <section className="left_desc">
            <h5>Best in Employee Assistance Program Providers</h5>
            <p>
              We provide the best Employee Assistance Program (EAP) in PAN
              INDIA. Get the Best Employee Mental Health Wellness Packages. Top
              in EAP service Providers in India. #1 in the List of Top EAP
              service Providers. Get Personalized Mental & Emotional Wellness
              Packages and Services for Your Corporate and Organization. Top
              Online Therapy and Councelling for your Employees. Best Mental
              Health Webinars.
            </p>
          </section>
          <section className="contact-button">
            <Link to ="/contact-us"> 
            <button >Contact us </button> 
            </Link>
           </section>
        </section>
        <section className="right">
          <section className="right_top_content_left">
            <h1 className="right_heading">We Take Care of Your</h1>
            <h3>Employees Mental Health</h3>
          </section>
          <section className="right_desc">
            <ol className="custom_list">
              <li>Best EAP Provider in India</li>
              <li>24x7 Helpline for you</li>
              <li>Individual Employee Therapy</li>
              <li>Mental Health Workshops</li>
              <li>Awareness Modules</li>
              <li>Personalized HR Page</li>
              <li>Personalized Employee Profile</li>
              <li>Monthly Reports</li>
            </ol>
          </section>
          <section className="bottom_line">
            <h3>Trusted by 100+ Corporates</h3>
          </section>
          <section className="visit_link">
            <p>some link</p>
          </section>
        </section>
      </section>

      {/* section 3 */}
      <section className="section3_container">
        <section className="left_three">
          <section className="left_content">
            <h1>Best Employee Assistance Program (EAP) Provider PAN INDIA</h1>
            <section className="left_desc">
              <ul className="custom_list">
                {eap_features.map((item, ind) => (
                  <li key={ind}>{item}</li>
                ))}
              </ul>
            </section>
          </section>
          <section className="callback-button">
          <Link to="/contact-us">
        <button >Request Call Back</button>
      </Link>
          </section>
        </section>
        {/* section3 right side */}
        <section className="right">
          <section className="image-container">
            <section className="top">
              <img
                src="https://images.unsplash.com/photo-1501747315-124a0eaca060?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2ltcGxlJTIwY2FsbSUyMHF1b3RlJTIwc3F1YXJlJTIwJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </section>
            <section className="grid-container">
              <section className="item">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661611271263-bfad973f35b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNxdWFyZSUyMG1lZXRpbmclMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                />
              </section>
              <section className="item">
                <img
                  src="https://plus.unsplash.com/premium_photo-1677087121676-2acaaae5b3c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3F1YXJlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
                  alt=""
                />
              </section>
              <section className="item">
                {" "}
                <img
                  src="https://plus.unsplash.com/premium_photo-1661544079249-211b90604d77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNxdWFyZSUyMG1lZXRpbmclMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                />
              </section>
              <section className="item">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661512006493-e1842a498f86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3F1YXJlJTIwbWVldGluZyUyMGltYWdlfGVufDB8fDB8fHww"
                  alt=""
                />
              </section>
            </section>
          </section>
        </section>
      </section>
      {/* section 3 ends here */}

      {/* section5 */}
      <section className="section5_container">
        <section className="text">
          <h1>#1 EAP PROVIDER INDIA</h1>
        </section>
        <section className="service-btn">
          <button type="button"> BEST CORPORATE MENTAL HEALTH SERVICES </button>
        </section>
      </section>

      <section className="eap_multi_compo">
        {section1_utils.map((item, ind) => (
          <Section1
            key={ind}
            img={item.img}
            title={item.title}
            lists={item.lists}
          />
        ))}
      </section>
    </section>
  );
}
