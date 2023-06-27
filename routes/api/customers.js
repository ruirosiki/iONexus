const express = require("express");
const router = express.Router();
const customersCtrl = require("../../controllers/api/customers");

// GET - retrieves all the customers from the database
router.get("/", customersCtrl.index);
// POST - add new customer
router.post("/", customersCtrl.createCustomer);
module.exports = router;
