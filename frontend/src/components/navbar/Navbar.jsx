import "./navbar.scss";
import { useContext, useState } from "react";
import {
  IoCall,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  CiMenuBurger,
  MdCancel,
} from "../../assets/icons/index";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import { navLinks } from "../../utils/navbarutils/index";
import { usestate } from "../../statemanagement/UseAuth";
const Navbar = () => {
  const { user, setUser } = useContext(usestate);
  const [toggle, setToggle] = useState(false);
  const logout = () => {
    setToggle((prev) => !prev);

    localStorage.removeItem("user");
    setUser("");
  };
  return (
    <div>
      <header>
        <nav className="first-nav">
          <section className="left">
            <section className="left-item1">
              <IoCall />
              <a href="https://api.whatsapp.com/send?phone=919384838353">
                +919384838353
              </a>
            </section>
            <section className="left-item2">
              <i className="fa-regular fa-envelope"></i>
              <a href="mailto:customerservice@indiatherapist.com">
                customerservice@indiatherapist.com
              </a>
            </section>
          </section>
          <section className="right">
            <section className="right-item1">
              <a href="https://www.facebook.com/yourdesidost">
                <FaFacebookF />
              </a>

              <a href="https://twitter.com/indiatherapist">
                <FaTwitter />
              </a>

              <a href="https://instagram.com/indiatherapist">
                <FaInstagram />
              </a>

              <a href="https://www.linkedin.com/in/indiatherapist/">
                <FaLinkedin />
              </a>
            </section>

            <Link
              to="/top-indian-therapists-best-online-therapy"
              className="right-item2"
            >
              Make an appointment
            </Link>
          </section>
        </nav>

        {/* desktop version */}
        <section className="second-nav-container">
          <nav className="second-nav">
            <section className="logo">
              <Link to={"/"}>
                <img src={logo} />
              </Link>
            </section>
            <section className="nav-items">
              {navLinks.map((item, ind) => (
                <Link key={ind} to={item.path}>
                  {item.title}
                </Link>
              ))}
              {user ? (
                <>
                  <p style={{ cursor: "pointer" }} onClick={logout}>
                    logout
                  </p>

                  {user?.isAdmin && (
                    <Link
                      onClick={() => {
                        setToggle((prev) => !prev);
                      }}
                      to="/private/admin"
                    >
                      admin
                    </Link>
                  )}
                  <h5 style={{ color: "green", cursor: "pointer" }}>
                    Hi! {user?.user}
                  </h5>
                </>
              ) : (
                <Link
                  onClick={() => {
                    setToggle((prev) => !prev);
                  }}
                  to={"/login"}
                >
                  Login
                </Link>
              )}
            </section>
            <section className="mobile_version_nav">
              {!toggle && (
                <section className="menubtn_container">
                  <CiMenuBurger
                    style={{ cursor: "pointer" }}
                    className="menu_icon"
                    onClick={() => {
                      setToggle((prev) => !prev);
                    }}
                  />
                </section>
              )}
              {/* {toggle} */}
              {toggle && (
                <section className="toggleContainer">
                  {toggle && (
                    <section className="cancelbutton_container">
                      <MdCancel
                        style={{ cursor: "pointer" }}
                        className="cancelButton"
                        onClick={() => {
                          setToggle((prev) => !prev);
                        }}
                      />
                    </section>
                  )}
                  <section className="mobile_navitems_container">
                    {navLinks.map((item, ind) => (
                      <Link
                        onClick={() => {
                          setToggle((prev) => !prev);
                        }}
                        className="links"
                        to={item.path}
                        key={ind}
                      >
                        {item.title}
                      </Link>
                    ))}
                    {user ? (
                      <>
                        <p
                          style={{ color: "red", cursor: "pointer" }}
                          onClick={logout}
                        >
                          logout
                        </p>

                        {user?.isAdmin && (
                          <Link
                            onClick={() => {
                              setToggle((prev) => !prev);
                            }}
                            to="/private/admin"
                          >
                            admin
                          </Link>
                        )}
                        <h5 style={{ color: "green", cursor: "pointer" }}>
                          Hi! {user.user}
                        </h5>
                      </>
                    ) : (
                      <Link
                        onClick={() => {
                          setToggle((prev) => !prev);
                        }}
                        to={"/login"}
                      >
                        Login
                      </Link>
                    )}
                  </section>
                </section>
              )}
            </section>
          </nav>
        </section>
      </header>
    </div>
  );
};

export default Navbar;
