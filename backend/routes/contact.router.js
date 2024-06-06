import express from "express";

import { addcontactform } from "../controllers/contact.controller.js";

const router = express.Router();

router.post("/addcontact", addcontactform);

export default router;
