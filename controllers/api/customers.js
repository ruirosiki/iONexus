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

module.exports = {
  index,
  createCustomer,
};
