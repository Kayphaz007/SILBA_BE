const express = require("express");
const router = express.Router();
const {
  getReviews,
  postReview,
  getReviewById,
} = require("../controllers/review");

router.route("/").get(getReviews).post(postReview);

router.route("/:businessId").get(getReviewById);

module.exports = router;
