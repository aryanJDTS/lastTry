const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('../db/connect');
const saveFormDataRouter = require('./saveFormData');
const allowCors = require('../cors');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use('/saveLeadData', allowCors(saveFormDataRouter));

// Root route
app.get('/', (req, res) => {
  res.send("Hello World");
});

// Connect to MongoDB
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(error => {
  console.error('Database connection error:', error);
  process.exit(1);
});

module.exports = app;
