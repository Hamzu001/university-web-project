// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const departmodel = require("../../models/Depart");
require("../../middle/mongoose");

export default async function handler(req, res) {
  let n = await departmodel.find();
  res.status(200).json({ n });
}
