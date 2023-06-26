const express = require("express");
const router = express.Router();
const inventoryCtrl = require("../../controllers/api/inventory");

// GET all items from database
router.get("/", inventoryCtrl.index);
// POST - adds item to database
router.post("/", inventoryCtrl.createItem);

module.exports = router;
