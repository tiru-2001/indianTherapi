import therapistmodel from "../models/therapistSchema.js";
const addTherapist = async (req, res) => {
  try {
    const {
      name,
      description,
      location,
      number,
      languages,
      price,
      experience,
    } = req.body;

    const { filename } = req.file;
    console.log(filename);
    const nameExist = await therapistmodel.findOne({ name });
    console.log(nameExist);
    if (nameExist) {
      return res
        .status(400)
        .send({ message: "data already exists", success: false });
    }
    const finalResult = await new therapistmodel({
      name,
      description,
      location,
      number,
      languages,
      price,
      experience,
      image: filename,
    }).save();
    return res.status(200).send({
      message: "Added data successfully",
      success: true,
    });
    console.log(finalResult);
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      success: false,
      message: "Something went wrong",
    });
  }
};

// getAllTherapists

const getAllTherapists = async (req, res) => {
  try {
    const allTherapist = await therapistmodel.find();
    res.status(200).send({
      messaage: "data fetched successfully",
      success: true,
      allTherapist,
    });
  } catch (e) {
    res.status(200).send({
      messaage: "something went wrong",
      success: false,
    });
  }
};

export { addTherapist, getAllTherapists };
