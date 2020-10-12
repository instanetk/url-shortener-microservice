const { Shortener, validate } = require("../models/shortener");
const express = require("express");
const router = express.Router();

router.get("/api/shorturl/:index", async (req, res) => {
  const index = req.params.index;

  const result = await Shortener.findOne({ short_url: index });

  res.redirect("http://" + result.original_url);
});

router.post("/api/shorturl/new/", async (req, res) => {
  const { error } = validate(req.query.url);
  if (error) return res.status(400).send({ error: "Invalid URL" });

  try {
    let url = new Shortener({
      original_url: req.query.url,
    });

    await url.save();

    const result = await Shortener.findById(url._id);

    res.send({ original_url: req.query.url, short_url: result.short_url });
  } catch (ex) {
    console.log(ex.message);
    res.send({ error: "Invalid URL" });
  }
});

module.exports = router;
