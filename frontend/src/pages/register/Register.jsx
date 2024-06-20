import "./register.scss";
import { useEffect, useState } from "react";
import configuredUrl from "../../utils/request/request";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IoMdEye } from "react-icons/io";
import { HiEyeOff } from "react-icons/hi";
const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);
  const [confirmPass, setConfirmPass] = useState("");
  const [type, setType] = useState(false);

  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let er = "";
      if (!passwordRegex.test(password)) {
        er =
          "password must contain at least one lowercase letter ,uppercase letter,one digit,one special characters and the lenght should be eight";
      }
      if (phone.length < 10) {
        er += "phone must be at least 10 characters";
      }
      if (password !== confirmPass) {
        er += "Passwords and confirm Passwords are not matching";
      }
      if (er.length) {
        setError(er);
        return;
      }

      let { data } = await configuredUrl.post("/auth/register", {
        username: name,
        password,
        email,
        phone,
      });
      if (data.success) {
        setError("");
        toast.success(data.message);
        navigate("/login");
      } else {
        setError(data.message);
      }
    } catch (e) {
      let { response } = e;
      setError(response.data.message);
    }
  };

  useEffect(() => {
    document.title = "Register Page";
    const descriptionMeta = document.createElement("meta");
    descriptionMeta.name = "description";
    descriptionMeta.content =
      "Sign up for IndiaTherapist and start your journey towards improved mental health.";
    const keywordsMeta = document.createElement("meta");
    keywordsMeta.name = "keywords";
    keywordsMeta.content = "IndiaTherapist, register, sign up, mental health";
    document.head.appendChild(descriptionMeta);
    document.head.appendChild(keywordsMeta);
    return () => {
      document.head.removeChild(descriptionMeta);
      document.head.removeChild(keywordsMeta);
    };
  }, []);
  return (
    <section className="app__register-container">
      <section className="app__register-subcontainer">
        <section className="left">
          <section className="app__left-subcontainer">
            <section className="app__signup-title">
              <h1 className="main_heading">Register</h1>
              <p>Please enter your information to register</p>
            </section>
            <section className="app__form">
              <form className="form-container">
                <div>
                  <input
                    required
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    placeholder="Enter the name"
                    id="name"
                    type="text"
                    value={name}
                  />
                </div>
                <div>
                  <input
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Enter the email"
                    id="email"
                    type="email"
                    value={email}
                  />
                </div>

                <div className="pass">
                  <input
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder="Enter your password"
                    type={type ? "text" : "password"}
                  />
                  {type ? (
                    <HiEyeOff
                      className="icons"
                      onClick={() => {
                        setType((prev) => !prev);
                      }}
                    />
                  ) : (
                    <IoMdEye
                      className="icons"
                      onClick={() => {
                        setType((prev) => !prev);
                      }}
                    />
                  )}
                </div>
                <div className="pass">
                  <input
                    required
                    value={confirmPass}
                    onChange={(e) => {
                      setConfirmPass(e.target.value);
                    }}
                    placeholder="Confirm password"
                    type={type ? "text" : "password"}
                  />
                  {type ? (
                    <HiEyeOff
                      className="icons"
                      onClick={() => {
                        setType((prev) => !prev);
                      }}
                    />
                  ) : (
                    <IoMdEye
                      className="icons"
                      onClick={() => {
                        setType((prev) => !prev);
                      }}
                    />
                  )}
                </div>
                <div>
                  <input
                    required
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    placeholder="Enter whatsapp number"
                    id="phone"
                    type="tel"
                    value={phone}
                  />
                </div>

                {error && <section style={{ color: "red" }}>{error}</section>}

                <section className="btn_container">
                  <button type="submit" onClick={handleSubmit} className="btn">
                    Register
                  </button>
                  <Link to={"/login"}>
                    <button type="submit" className="btn">
                      Login
                    </button>
                  </Link>
                </section>
              </form>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Register;
