
const mongoose = require('mongoose');

export default async function handler(req, res) {
  await mongoose.connect("mongodb://0.0.0.0:27017/gmgc");
  const formSchema = new mongoose.Schema({
    title: String,
    des: String,
  });
  const formmodel = mongoose.models.news || mongoose.model("news", formSchema);
  const data = new formmodel(req.body);
  const r = await data.save();
  console.log(r);
  res.status(200).json(r); 
}

