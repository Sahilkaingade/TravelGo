const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

// POST review
router.post("/", async (req, res) => {
  try {
    const { name, rating, review } = req.body;

    if (!name || !rating || !review) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newReview = new Review({
      name,
      rating,
      review,
    });

    await newReview.save();

    res.status(201).json({
      success: true,
      message: "Review saved successfully",
      data: newReview,
    });
  } catch (error) {
    console.error("Review Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET all reviews (optional)
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
