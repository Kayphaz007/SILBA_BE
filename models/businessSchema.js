const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema({
  business_name: { type: String, required: true },
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
  long_description: {type: String},
  category: {
    type: String,
    enum: ["shop", "restaurant", "experience"],
    required: true,
  },
  business_id: { type: String, required: true },
  business_rating: { type: Number, required: true },
  votes: { type: Number, required: true },
  review_count: { type: Number, required: true },
});

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;
