const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema({
  business_name: { type: String, required: true },
  ownerName: { type: String, required: true },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point",
    },
    coordinates: {
      type: [Number],
    },
  },
  address: { type: String },
  images: { type: [String] },
  description: { type: String },
  long_description: { type: String },
  category: {
    type: String,
    enum: ["shop", "restaurant", "experience"],
    required: true,
  },
  business_rating: { type: Number, default: 5 },
  votes: { type: Number, default: 0 },
  review_count: { type: Number, default: 0 },
  ownerUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;
