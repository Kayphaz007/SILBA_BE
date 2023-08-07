const Order = require("../models/orderSchema");
const Item = require("../models/itemSchema");
// const Checkout = require("../models/checkoutSchema");
const { findAndDeleteByIds } = require("../utils/findAndDeleteByIds");
const Basket = require("../models/basketSchema");

exports.getOrderByUserId = async (req, res, next) => {
  const { refUser } = req.params;
  const basket = await Order.find({ refUser: refUser });
  res.status(200).send({ basket });
};

exports.postOrderByUserId = async (req, res, next) => {
  const { refUser } = req.params;
  // create an error to handle a case where id is an empty array
  // id will be an array of items id
  const { id } = req.body;
  if (!Array.isArray(id)) {
    id = [id];
  }
  // ! Please change Basket in line 22 to checkout
  // find and delete items in checkout
  const itemsInCheckout = await findAndDeleteByIds(Basket, id, refUser);

  await Order.create(itemsInBasket);
  res.status(200).send({ itemsInCheckout });
};

exports.deleteItemFromOrder = async (req, res, next) => {
  const { refUser } = req.params;
  const { id } = req.body;
  const deletedItem = await Order.findOneAndDelete({
    refUser: refUser,
    refItem: id,
  });
  res.status(200).send({ deletedItem });
};
