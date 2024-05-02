import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Login,
  Parent,
  Home,
  Register,
  Private,
  Appointment,
  Therapist,
  Dietician,
  Contact,
  Counseling,
  Blogs,
  Eap,
  Admin,
  Addtherapist,
  Termsandcond,
} from "./pages";
import { Addbtn } from "./components";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Parent />}>
            <Route index element={<Home />} />
            <Route path="private/*" element={<Private />}>
              <Route path="booking" element={<Appointment />} />
              <Route path="admin/*" element={<Admin />}>
                <Route index element={<Addbtn />} />
                <Route path="add-therapist" element={<Addtherapist />} />
              </Route>
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="top-therapists" element={<Therapist />} />
            <Route path="dietician" element={<Dietician />} />
            <Route path="counseling" element={<Counseling />} />
            <Route path="contact-us" element={<Contact />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="register" element={<Register />} />
            <Route path="eap" element={<Eap />} />
            <Route path="termsandcond" element={<Termsandcond />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
