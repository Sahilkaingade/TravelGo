require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/feedback", require("./routes/feedback"));


// Test route
app.get("/", (req, res) => {
  res.send("Server working");
});


// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Atlas Connected");

  app.listen(process.env.PORT || 5000, () =>
    console.log("Server running on port 5000")
  );

})
.catch(err => console.log(err));
