import usermodel from "../models/userSchema.js";

const getCurrentAdmin = async (req, res) => {
  try {
    if (!req.isadminOrnot) {
      return res.status(400).send({
        message: "cannot access page",
        success: false,
      });
    }
    const currentAdmin = await usermodel.findById(req.user_id);
    return res.send({
      message: "we found the Admin",
      success: true,
      adminData: currentAdmin,
    });
  } catch (er) {
    console.log(er);
    return res.status(500).send({
      message: "Something went wrong in getCurrentAdmin controller",
      success: false,
    });
  }
};

export { getCurrentAdmin };
