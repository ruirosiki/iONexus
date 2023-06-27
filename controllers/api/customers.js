const customer = require("../../models/customer");
const Customer = require("../../models/customer");

async function index(req, res) {
  const customers = await Customer.find({}).exec();
  res.json(customers);
}

async function createCustomer(req, res) {
  console.log("this is req.body", req.body);
  const newCustomer = await Customer.create(req.body);
  console.log("this is new customer in controller", newCustomer);
  await newCustomer.save();
  res.json(newCustomer);
}

async function updateCustomer(req, res) {
  const customerId = req.params.id;
  const updateCustomerData = req.body;
  const updatedCustomer = await Customer.findByIdAndUpdate(
    customerId,
    updateCustomerData,
    { new: true }
  );
  res.json(updatedCustomer);
}

async function deleteCustomer(req, res) {
  const customerId = req.params.id;
  const deletedCustomer = await Customer.findByIdAndDelete(customerId);
  res.json(deletedCustomer);
}

module.exports = {
  index,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
