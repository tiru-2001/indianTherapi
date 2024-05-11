import appointmentModel from "../models/appointMentSchema.js";

const addAppointment = (req, res) => {
  try {
    const { name, email, age, gender, phone } = req.body;

    const result = new appointmentModel({
      name,
      email,
      age,
      gender,
      phone,
    }).save();
    return res.status(201).send({
      message: "Added appointment successfully",
      success: true,
      result,
    });
  } catch (e) {
    console.log(e);
    return res.status(401).send({
      message: "Something went wrong",
      success: false,
    });
  }
};
export { addAppointment };
