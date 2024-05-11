import mongoose from "mongoose";

const userschema = new mongoose.Schema(
  {
    isAdmin: { type: Boolean, default: false },
    username: {
      type: String,
      required: true,
      min: 4,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    ip: {
      type: String,
    },
    phone: {
      type: Number,
      required: true,
      match: /^d{10}$/,
    },
  },
  { timeStamps: true }
);

const usermodel = mongoose.model("user", userschema);
export default usermodel;
