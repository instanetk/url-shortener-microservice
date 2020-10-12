const Joi = require("joi");
const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  autoIncrement = require("mongoose-auto-increment");

autoIncrement.initialize(mongoose);

const shortenerSchema = new Schema({
  original_url: String,
  short_url: Number,
});

shortenerSchema.plugin(autoIncrement.plugin, {
  model: "Shortener",
  field: "short_url",
  startAt: 1,
  incrementBy: 1,
});

const Shortener = mongoose.model("Shortener", shortenerSchema);

function validateUrl(original) {
  // const schema = Joi.string().domain();
  const schema = Joi.string().uri();

  return schema.validate(original);
}

exports.Shortener = Shortener;
exports.validate = validateUrl;
