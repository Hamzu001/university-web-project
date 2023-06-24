const mongoose = require('mongoose');

export default async function handler(req, res) {
  await mongoose.connect("mongodb://0.0.0.0:27017/gmgc");
//   console.log("connect ")
  const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
  });
  const contactmodel = mongoose.models.contact || mongoose.model("contact", contactSchema);
  const data = new contactmodel(req.body);
  const r = await data.save();
//   console.log(r);
  res.status(200).json(r);
}

