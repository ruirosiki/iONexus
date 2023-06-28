const Item = require("../../models/item");
const Category = require("../../models/category");

async function index(req, res) {
  const items = await Item.find({}).sort("category").exec();
  res.json(items);
}

async function showItem(req, res) {}

async function createItem(req, res) {
  const newItem = await Item.create(req.body);
  await newItem.save();
  console.log(req.body);
  res.json(newItem);
}

// Helper Functions
async function getCategoryId(req, res) {
  const categoryName = req.body.categoryName;
  const categoryId = await Category.findOne({ name: categoryName }).exec();
  res.json(categoryId);
}

async function getCategories(req, res) {
  const categories = await Category.find({}).exec();
  res.json(categories);
}

async function updateItem(req, res) {}
module.exports = {
  index,
  showItem,
  createItem,
  updateItem,
  getCategoryId,
  getCategories,
};
