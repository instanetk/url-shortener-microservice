const redirect = require("./routes/shortener");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", redirect);

app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

require("./startup/db")();

const port = process.env.PORT || 3000;

const server = app.listen(port, console.log(`Listening on port ${port}`));

module.exports = server;
