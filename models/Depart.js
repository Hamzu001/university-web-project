const mongoose = require("mongoose");

const departSchema = new mongoose.Schema({
  imgurl: String,
  name: String,
  desig: String,
  edu: String,
  depat: String,
});
module.exports = mongoose.models.departments || mongoose.model("departments", departSchema);
