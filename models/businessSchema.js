const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema({
  businessName: { type: String, required: true },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point",
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  address: { type: String, required: true },
  images: { type: [String], required: true },
  description: { type: String, required: true },
  category: {
    type: String,
    enum: ["shop", "restaurant", "experience"],
    required: true,
  },
  businessId: { type: String, required: true },
  businessRating: { type: Number, required: true },
  votes: { type: Number, required: true },
  reviewCount: { type: Number, required: true },
});

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;
