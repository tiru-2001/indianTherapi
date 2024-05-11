import express from "express";
import {
  paypalController,
  successController,
  cancelController,
} from "../controllers/paypal.controller.js";

const router = express.Router();

router.post("/payment", paypalController);
router.get("/success", successController);
router.get("/cancel", cancelController);
export default router;
