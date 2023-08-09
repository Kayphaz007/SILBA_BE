const express = require("express");
const {
  getAllItemsInBasket,
  getBasketByUserId,
  postBasketByUserId,
  deleteItemFromBasket,
  patchItemQuantityInBasket,
} = require("../controllers/basket");
const router = express.Router();

// routes for basket
router.route("/").get(getAllItemsInBasket);
router
  .route("/:buyerId")
  .get(getBasketByUserId)
  .post(postBasketByUserId)
  .patch(patchItemQuantityInBasket)
  .delete(deleteItemFromBasket);

module.exports = router;
