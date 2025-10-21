const express = require("express");
const router = express.Router();

let feedbacks = [];

// Submit feedback
router.post("/", (req, res) => {
  feedbacks.push(req.body);
  res.json({ success: true, msg: "Feedback submitted", feedbacks });
});

// Get feedback
router.get("/", (req, res) => {
  res.json(feedbacks);
});

module.exports = router;
