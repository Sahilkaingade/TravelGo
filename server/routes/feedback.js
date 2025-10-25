const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

// POST /api/feedback
router.post("/", async (req, res) => {
  try {
    const { name, rating, review } = req.body;

    const newReview = new Review({ name, rating, review });
    await newReview.save();

    res.status(201).json({ message: "Review submitted successfully", review: newReview });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/feedback - optional, to fetch all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
