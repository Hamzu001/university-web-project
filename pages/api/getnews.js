// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const newsmodel = require("../../models/News");
require("../../middle/mongoose");
// const mongoose = require("mongoose");

export default async function handler(req, res) {
  let n = await newsmodel.find();
  res.status(200).json({ n });
}
