const Item = require("../../models/item");

async function index(req, res) {
  const items = await Item.find({}).sort("category").exec();
  res.json(items);
}

async function showItem(req, res) {}

async function createItem(req, res) {
  const newItem = await Item.create(req.body);
  //   req.body.user = req.user._id
  await newItem.save();
  console.log(req.body);
  res.json(newItem);
}

async function updateItem(req, res) {}
module.exports = {
  index,
  showItem,
  createItem,
  updateItem,
};
