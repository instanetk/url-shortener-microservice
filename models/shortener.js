const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  url: String,
  index: Number,
});
