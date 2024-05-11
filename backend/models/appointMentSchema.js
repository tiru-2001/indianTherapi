import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    paymentId: {
      type: String,
      required: true,
    },
    paymentStatus: {
      type: String,
      default: "not-paid",
    },
    country: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },

    therapistname: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },

  { timeStamps: true }
);

const appointmentModel = mongoose.model("appointmentmodel", appointmentSchema);
export default appointmentModel;

// paymentId: payment.id,
//   name,
//   phone,
//   email,

//   price,
//   date,
//   time,
//   age,
//   gender,
//   paymentStatus,
//   therapistemail,
//   therapistphone,
