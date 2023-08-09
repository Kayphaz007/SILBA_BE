const express = require("express");
const {
  getOrderByUserId,
  postOrderByUserId,
  deleteItemFromOrder,
} = require("../controllers/order");
const router = express.Router();

// routes for orders
router
  .route("/:refUser")
  .get(getOrderByUserId)
  .post(postOrderByUserId)
  .delete(deleteItemFromOrder);

module.exports = router;
