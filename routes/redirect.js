const express = require("express");
const router = express.Router();

router.get("/:index", (req, res) => {
  const directory = [];
  const index = req.params.index;
  const url = req.query.url;
  console.log(req.query.url);
  directory.push(url);
  console.log(directory);
  const result = directory[0];
  console.log("result", result);

  res.send(index);
});

module.exports = router;
