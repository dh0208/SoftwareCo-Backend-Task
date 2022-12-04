const mongoose = require("mongoose");

const addProduct = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  product_name: {
    type: String,
  },
  stock_qty: {
    type: Number,
  },
  price: {
    type: Number,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Product", addProduct);
