const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("./customer");
const itemSchema = require("./itemSchema");
const lineItemSchema = new Schema(
  {
    qty: {
      type: Number,
      default: 1,
    },
    item: itemSchema,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

const orderSchema = new Schema({
  customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  orderDate: Date,
  lineItems: [lineItemSchema],
  isOrdered: {
    type: Boolean,
    default: false,
  },
  isPaid: {
    type: Boolean,
    default: false,
  },
  orderTotal: Number,
});

module.exports = mongoose.model("Order", orderSchema);
