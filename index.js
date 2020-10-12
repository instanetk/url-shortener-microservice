const redirect = require("./routes/shortener");
const express = require("express");
const app = express();

app.use("/", redirect);

require("./startup/db")();

const port = process.env.PORT || 3000;

const server = app.listen(port, console.log(`Listening on port ${port}`));

module.exports = server;
