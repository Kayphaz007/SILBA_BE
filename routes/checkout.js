const express = require("express");
const {
  getCheckoutByUserId,
  deleteItemFromCheckout,
  postCheckoutByUserId,
} = require("../controllers/checkout");
const router = express.Router();

// routes for checkouts
router
  .route("/:refUser")
  .get(getCheckoutByUserId)
  .post(postCheckoutByUserId)
  .delete(deleteItemFromCheckout);

module.exports = router;
