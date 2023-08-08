const express = require("express");
const router = express.Router();
const {
  getReviews,
  postReviews,
  getReviewById,
  changeVotesByOne,
} = require("../controllers/review");

router.route("/").get(getReviews).post(postReviews);

router.route("/:businessId").get(getReviewById);

router.route("/votes/:reviewId").patch(changeVotesByOne);
module.exports = router;
