const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});
module.exports = mongoose.models.contact || mongoose.model("contact", contactSchema);
