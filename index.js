const mongoose = require("mongoose");
const redirect = require("./routes/redirect");
const express = require("express");
const app = express();

app.use("/", redirect);

mongoose.connect(
  "mongodb://localhost/url_redirect",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  console.log("Connected to MongoDB")
);

const port = process.env.PORT || 3000;

const server = app.listen(port, console.log(`Listening on port ${port}`));

module.exports = server;
