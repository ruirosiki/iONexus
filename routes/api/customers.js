const express = require("express");
const router = express.Router();
const customersCtrl = require("../../controllers/api/customers");

// GET - retrieves all the customers from the database
router.get("/", customersCtrl.index);
// POST - add new customer
router.post("/", customersCtrl.createCustomer);
// PATCH - updates the customer data
router.patch("/:id", customersCtrl.updateCustomer);
// DELETE - Deletes customer from database
router.delete("/:id", customersCtrl.deleteCustomer);
module.exports = router;
