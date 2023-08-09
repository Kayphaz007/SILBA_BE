const asyncWrapper = require("../middleware/async");
const Reviews = require("../models/reviewSchema");

exports.getReviews = async (req, res, next) => {
  const reviews = await Reviews.find({});

  res.status(200).send({ reviews });
};

exports.postReviews = asyncWrapper(async (req, res, next) => {
  const { review, reviewVote, business, user } = req.body;
  const reviewData = await Reviews.create({
    review,
    reviewVote,
    business,
    user,
  });
  res.status(200).send({ success: true, data: reviewData });
});

exports.getReviewById = asyncWrapper(async (req, res, next) => {
  const { businessId } = req.params;
  const reviews = await Reviews.find({ business: businessId });
  res.status(200).send({ reviews });
});

exports.changeVotesByOne = asyncWrapper(async (req, res, next) => {
  const { reviewId } = req.params;
  const { voteUpdate } = req.body;
  const review = await Reviews.findById(reviewId);
  if (voteUpdate === "increase") {
    review.reviewVote += 1;
  } else if (voteUpdate === "decrease") {
    review.reviewVote -= 1;
  }
  await review.save();
  res.status(200).send({ "Review vote complete": review });
});
