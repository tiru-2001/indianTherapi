import { Footer } from "../../components";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import "./parent.scss";
const Parent = () => {
  return (
    <div className={"main_container"}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Parent;
