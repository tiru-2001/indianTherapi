import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./admin.scss";
import configuredUrl from "../../utils/request/request";
const Admin = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState("");
  const checkAdmin = async () => {
    try {
      const { data } = await configuredUrl.get("/admin/get-admin");
      if (data.success) {
        setAdmin(data.adminData.username);
      } else {
        toast.error("cannot access the admin page");
        navigate("/");
      }
    } catch (e) {
      console.log(e);
      toast.error("cannot access the admin page");

      navigate("/");
    }
  };
  useEffect(() => {
    checkAdmin();
  }, []);
  return (
    <>
      {admin && (
        <section className="admin_container">
          <h1 className="sub_heading">
            Admin page <br />
            <span>{admin}</span>
          </h1>
          <section className="outlet_container">
            <Outlet />
          </section>
        </section>
      )}
    </>
  );
};

export default Admin;
