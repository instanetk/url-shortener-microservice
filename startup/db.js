const config = require("config");
const mongoose = require("mongoose");

module.exports = function () {
  const db = config.get("db");

  const connection = mongoose.connect(
    config.get("db"),
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    console.log("Connected to MongoDB")
  );
};
