const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('../db/connect');
const saveFormDataRouter = require('./saveFormData');
const allowCors = require('../cors');

const app = express();
const PORT = process.env.PORT || 8000;
connectDB();
// Middleware
app.use(express.json());
app.use('/saveLeadData', allowCors(saveFormDataRouter));

// Root route
app.get('/', (req, res) => {
  res.send("Hello World");
});

app.listen(8000,()=>{
  console.log("connected to 8000");
})

module.exports = app;
