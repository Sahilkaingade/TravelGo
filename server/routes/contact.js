const express = require("express");

const router = express.Router();

const Contact = require("../models/Contact");


// SAVE CONTACT MESSAGE
router.post("/", async (req, res) => {

  try {

    const { name, email, message } = req.body;

    if (!name || !email || !message) {

      return res.status(400).json({
        message: "All fields are required",
      });

    }

    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();

    res.status(201).json({
      message: "Message saved successfully",
      contact: newContact,
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      message: "Server error",
    });

  }

});


// GET ALL CONTACT MESSAGES (optional)
router.get("/", async (req, res) => {

  try {

    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.json(contacts);

  } catch (err) {

    res.status(500).json({
      message: "Server error",
    });

  }

});

module.exports = router;
