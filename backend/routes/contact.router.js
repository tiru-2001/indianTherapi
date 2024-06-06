import express from "express";

import { addContactForm } from "../controllers/contact.controller.js";

const router = express.Router();

router.post("/addcontact", addContactForm);

export default router;
