const Customer = require("../../models/customer");

async function index(req, res) {
  const customers = await Customer.find({}).exec();
  res.json(customers);
}

module.exports = {
  index,
};
