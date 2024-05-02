import mongoose from "mongoose";

const therapistschema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    languages: {
      type: [String],
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const therapistmodel = mongoose.model("therapist", therapistschema);
export default therapistmodel;
