const express = require("express");
const router = express.Router();
const inventoryCtrl = require("../../controllers/api/inventory");

// GET /api/inventory
router.get("/", inventoryCtrl.index);

module.exports = router;
