import express from "express";
const router = express.Router();
router.get("/coo", (req, res) => {
  res.send({ message: "hi" });
});
export default router;
