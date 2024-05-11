import express from "express";
import { addAppointment } from "../controllers/appointment.controller.js";
import verifyToken from "../middlewares/authentication.js";
const router = express.Router();
router.post("/appointment-data", verifyToken, addAppointment);
export default router;
