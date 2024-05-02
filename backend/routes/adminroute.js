import express from "express";
import { getCurrentAdmin } from "../controllers/admin.controller.js";
import verifyToken from "../middlewares/authentication.js";
const router = express.Router();
router.get("/get-admin", verifyToken, getCurrentAdmin);
export default router;
