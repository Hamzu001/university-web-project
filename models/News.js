const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  title: String,
  des: String,
});
module.exports = mongoose.models.news || mongoose.model("news", newsSchema);
