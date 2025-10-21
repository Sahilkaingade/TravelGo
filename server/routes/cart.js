const express = require("express");
const router = express.Router();

let cart = [];

// Add item to cart
router.post("/add", (req, res) => {
  cart.push(req.body);
  res.json({ success: true, msg: "Item added to cart", cart });
});

// Get cart items
router.get("/", (req, res) => {
  res.json(cart);
});

module.exports = router;
