const express = require("express");
const router = express.Router();
const { getAllUsers, getUserById } = require("../controllers/user");
const {
  getBasketByUserId,
  postBasketByUserId,
  deleteItemFromBasket,
} = require("../controllers/basket");
const {
  getOrderByUserId,
  postOrderByUserId,
  deleteItemFromOrder,
} = require("../controllers/order");

router.route("/").get(getAllUsers);
router.route("/:userId").get(getUserById);

// routes for basket
router
  .route("/basket/:refUser")
  .get(getBasketByUserId)
  .post(postBasketByUserId)
  .delete(deleteItemFromBasket);

// routes for checkouts
// router
//   .route("/checkout/:refUser")
//   .get(getCheckoutByUserId)
//   .post(postCheckoutByUserId)
//   .delete(deleteItemFromCheckout);

// routes for orders
router
  .route("/order/:refUser")
  .get(getOrderByUserId)
  .post(postOrderByUserId)
  .delete(deleteItemFromOrder);
module.exports = router;
