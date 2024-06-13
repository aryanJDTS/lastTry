const express = require('express');
const router = express.Router();
const Lead = require('../models/leadSchema'); // Adjust path as needed

router.post('/', async (req, res) => {
  const { name, email, phone, answerOne, answerTwo, answerThree, answerFour } = req.body;

  try {
    // const leadData = await Lead.create({
    //   name,
    //   email,
    //   phone,
    //   answers: {
    //     answerOne,
    //     answerTwo,
    //     answerThree,
    //     answerFour
    //   }
    // });
    res.status(200).json({ message: "Data saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error occurred" });
  }
});

module.exports = router;
