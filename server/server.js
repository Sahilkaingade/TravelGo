const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Routes
const authRoutes = require("./routes/auth");
const cartRoutes = require("./routes/cart");
const feedbackRoutes = require("./routes/feedback");
const helpRoutes = require("./routes/help");
const downloadRoutes = require("./routes/downloads");

app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/help", helpRoutes);
app.use("/api/downloads", downloadRoutes);

// Root test route
app.get("/", (req, res) => {
  res.send("Backend API is running 🚀");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
