const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: { type: String, required: true },
  contactPerson: { type: String },
  email: String,
  phoneNumber: String,
  isActive: { type: Boolean, default: true },
});

module.exports = mongoose.model("Customer", customerSchema);
