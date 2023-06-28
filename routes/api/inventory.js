const express = require("express");
const router = express.Router();
const inventoryCtrl = require("../../controllers/api/inventory");

// GET all items from database
router.get("/", inventoryCtrl.index);
// POST - adds item to database
router.post("/", inventoryCtrl.createItem);
// POST - get the category id using category name
router.post("/category", inventoryCtrl.getCategoryId);
// GET - get all categories
router.get("/category", inventoryCtrl.getCategories);
module.exports = router;
