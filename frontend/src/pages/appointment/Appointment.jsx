import "./appointment.scss";
const Appointment = () => {
  console.log("hi booking page");
  return (
    <section className="booking_maincontainer">
      <h1 className="main_heading">Book Appointment</h1>
      <section className="booking_subcontainer">
        <form>
          <section className="input_container">
            <label>
              <h4>Date</h4>
              <input type="date" />
            </label>
            <label>
              <h4>Time</h4>
              <input type="time" />
            </label>
            <label>
              <h4>Name:</h4>
              <input type="text" placeholder="name" />
            </label>
            <label>
              <h4>Phone:</h4>

              <input type="number" placeholder="phone" />
            </label>
            <label>
              <h4>Email:</h4>

              <input type="email" placeholder="email" />
            </label>
            <label>
              <h4>Age:</h4>

              <input type="number" placeholder="age" />
            </label>
            <label className="radio_container">
              <input type="radio" name="gender" /> female
              <input type="radio" name="gender" /> male
            </label>
          </section>
          <button>Paynow</button>
        </form>
      </section>
    </section>
  );
};

export default Appointment;
