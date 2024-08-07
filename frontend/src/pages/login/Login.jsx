import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss";
import { toast } from "react-toastify";
import configuredUrl from "../../utils/request/request";
import { useNavigate } from "react-router-dom";
import { usestate } from "../../statemanagement/UseAuth";
import { useLocation } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { HiEyeOff } from "react-icons/hi";

const Login = () => {
  const location = useLocation();
  const { setUser } = useContext(usestate);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [type, setType] = useState(false);

  const handleLogin = async () => {
    try {
      const { data } = await configuredUrl.post("/auth/login", {
        password,
        email,
      });
      console.log(data);
      if (data.success) {
        toast.success("logged in successfully");
        localStorage.setItem(
          "user",
          JSON.stringify({ user: data.username, isAdmin: data.isAdmin })
        );
        console.log(localStorage.getItem("user"));
        console.log(JSON.parse(localStorage.getItem("user")));
        setUser(JSON.parse(localStorage.getItem("user")));
        if (location.state && location.state.from) {
          navigate(location.state.from);
        } else {
          navigate("/");
        }
      }
    } catch (e) {
      console.log(e);
      setError(e.response.data.message);
      toast.error(e.response.data.message);
    }
  };
  useEffect(() => {
    document.title = "Login Page";
    const descriptionMeta = document.createElement("meta");
    descriptionMeta.name = "description";
    descriptionMeta.content =
      "Login to IndiaTherapist to access your account and start your therapy journey.";
    const keywordsMeta = document.createElement("meta");
    keywordsMeta.name = "keywords";
    keywordsMeta.content = "IndiaTherapist, login, account, therapy";
    document.head.appendChild(descriptionMeta);
    document.head.appendChild(keywordsMeta);
    return () => {
      document.head.removeChild(descriptionMeta);
      document.head.removeChild(keywordsMeta);
    };
  }, []);
  return (
    <section>
      <section className="app__login-container">
        <section className="app__login-subcontainer">
          <section className="right">
            <section className="app__right-subContainer">
              <section className="app__sign-title">
                <h1>Log In</h1>
                <p>
                  Please enter your login information or click here to
                  registration
                </p>
              </section>
              <section className="app__form">
                <form className="form-container">
                  <div>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      placeholder="Enter your email"
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
                </form>
              </section>

              <section className="btn-container">
                <button onClick={handleLogin} className="btn">
                  Log In
                </button>
                <Link to="/register">
                  <button className="btn">Register</button>
                </Link>
              </section>

              {error && <section style={{ color: "red" }}>{error}</section>}
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Login;
