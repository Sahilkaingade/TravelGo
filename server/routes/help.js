const express = require("express");
const router = express.Router();

let helpRequests = [];

// Submit help request
router.post("/", (req, res) => {
  helpRequests.push(req.body);
  res.json({ success: true, msg: "Help request submitted", helpRequests });
});

// Get help requests
router.get("/", (req, res) => {
  res.json(helpRequests);
});

module.exports = router;
