const mongoose = require('mongoose');

export default async function handler(req, res) {
  await mongoose.connect("mongodb://0.0.0.0:27017/gmgc");
  const departSchema = new mongoose.Schema({
    imgurl: String,
    name: String,
    desig: String,
    edu: String,
    depat: String,
  });
  const adddepartmodel = mongoose.models.departments || mongoose.model("departments", departSchema);
  const data = new adddepartmodel(req.body);
  const r = await data.save();
//   console.log(r);
  res.status(200).json(r); 
}

