const asyncWrapper = require("../middleware/async");
const Basket = require("../models/basketSchema");
const Checkout = require("../models/checkoutSchema");
const Item = require("../models/itemSchema");
const { findAndDeleteByIds } = require("../utils/findAndDeleteByIds");

exports.getCheckoutByUserId = asyncWrapper(async (req, res, next) => {
  const { refUser } = req.params;
  const checkout = await Checkout.find({ refUser });
  res.status(200).send({ checkout });
});

exports.postCheckoutByUserId = asyncWrapper(async (req, res, next) => {
  const { refUser } = req.params;
  // create an error to handle a case where id is an empty array
  // id will be an array of items id
  const { id } = req.body;
  if (!Array.isArray(id)) {
    id = [id];
  }
  // find and delete items in basket
  const itemsInBasket = await findAndDeleteByIds(Basket, id, refUser);

  await Checkout.create(itemsInBasket);
  res.status(200).send({ itemsInBasket });
});

exports.deleteItemFromCheckout = asyncWrapper(async (req, res, next) => {
  const { refUser } = req.params;
  const { id } = req.body;
  const deletedItem = await Checkout.findOneAndDelete({
    refUser: refUser,
    refItem: id,
  });
  res.status(200).send({ deletedItem });
});
