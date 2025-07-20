const mongoose = require("mongoose");

const imgSchema = mongoose.Schema({
  Title: { type: String, required: true },
  Image: { type: String, required: true },
});

module.exports = mongoose.model("Images", imgSchema);
