const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  itemname: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  // quantity attributes for items
  price: {
    type: Number,
    required: true,
  },
  refUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  refItem: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
