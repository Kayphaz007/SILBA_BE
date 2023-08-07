const mongoose = require("mongoose");

const basketSchema = new mongoose.Schema({
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

const Basket = mongoose.model("Basket", basketSchema);

module.exports = Basket;
