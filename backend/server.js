import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/authenticate.route.js";
import adminrouter from "./routes/adminroute.js";
import therapistrouter from "./routes/addtherapists.js";
import connectToDb from "./config/connection.js";
import cookieParser from "cookie-parser";
import appointmentrouter from "./routes/appointment.route.js";
import paypalrouter from "./routes/paypal.route.js";
dotenv.config();
connectToDb();

const port = process.env.PORT || 8800;
const app = express();
app.use(cookieParser());

app.use(
  cors({
    origin: "https://indiatherapist.com",
    credentials: true,
  })
);
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hi,Iam on");
});
app.use("/api/v1/auth", router);
app.use("/api/v1/admin", adminrouter);
app.use("/api/v1/therapist", therapistrouter);
app.use("/uploads", express.static("./uploads"));
app.use("/api/v1/appointment", appointmentrouter);
app.use("/api/v1/pay", paypalrouter);

app.listen(port, () => {
  console.log("listening on port");
});
