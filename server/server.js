require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/auth");
const cartRoutes = require("./routes/cart");
const feedbackRoutes = require("./routes/feedback");
const helpRoutes = require("./routes/help");
const downloadRoutes = require("./routes/downloads");
const contactRoutes = require("./routes/contact");

app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/help", helpRoutes);
app.use("/api/downloads", downloadRoutes);
app.use("/api/contact", contactRoutes);

// Root
app.get("/", (req, res) => {
  res.send("Backend API is running 🚀");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () =>
      console.log(`🚀 Server running on port ${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ MongoDB error:", err);
  });
