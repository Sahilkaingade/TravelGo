const express = require("express");
const router = express.Router();

let downloadCount = 0;

// Increment download count
router.post("/", (req, res) => {
  downloadCount++;
  res.json({ success: true, msg: "Download recorded", totalDownloads: downloadCount });
});

// Get total downloads
router.get("/", (req, res) => {
  res.json({ totalDownloads: downloadCount });
});

module.exports = router;
