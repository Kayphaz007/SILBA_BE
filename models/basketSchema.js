const mongoose = require("mongoose");

const basketSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  itemDescription: {
    type: String,
    required: true,
  },
  itemImage: {
    type: String,
    // required: true,
  },
  itemLocation: {
    type: String,
    required: true,
  },

  addressForCollection: {
    type: String,
    // required: true,
  },
  itemPrice: {
    type: Number,
    required: true,
  },
  itemRating: {
    type: Number,
    required: true,
  },
  stockCount: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },

  deliveryOrCollection: {
    type: String,
    enum: ["Delivery", "Collection"],
    required: true,
  },
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  buyerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  businessId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Business",
    required: true,
  },
});

const Basket = mongoose.model("Basket", basketSchema);

module.exports = Basket;
