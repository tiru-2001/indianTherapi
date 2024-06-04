import express from "express";

import { addContactForm } from "../controllers/contact.controller.js";

const router = express.Router();

router.post("/uploadcontact", addContactForm);

export default router;
