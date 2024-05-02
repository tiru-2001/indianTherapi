import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.accessToken;
    console.log(token);
    if (!token) {
      return res.status(401).send({
        message: "There is no access token please logout and login",
        success: false,
      });
    }
    jwt.verify(token, process.env.JWT_KEY, async (err, data) => {
      if (err) {
        return res.status(400).send({
          message: "Authentication failed",
          success: false,
        });
      }
      console.log(data);
      if (data.isAdmin) {
        req.user_id = data.user_id;
        next();
      } else {
        return res.status(200).send({
          message: "User cannot acces ",
          success: false,
        });
      }
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "Something went wrong in jwt authentication function",
      success: false,
    });
  }
};

export default verifyToken;
