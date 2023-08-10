const mongoose = require("mongoose");
const User = require("./userSchema");

const reviewSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    businessName: { type: String },
    review: { type: String, required: true },
    review_votes: { type: Number, default: 0 },
    businessId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Business",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

const Reviews = mongoose.model("Review", reviewSchema);

module.exports = Reviews;
