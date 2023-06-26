const Schema = require("mongoose").Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  qty: Number,
  unit: String,
  cost: Number,
  price: { type: Number, required: true },
});

module.exports = itemSchema;
