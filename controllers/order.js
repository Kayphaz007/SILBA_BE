const Order = require("../models/orderSchema");
const Item = require("../models/itemSchema");
// const Checkout = require("../models/checkoutSchema");
const { findAndDeleteByIds } = require("../utils/findAndDeleteByIds");
const Basket = require("../models/basketSchema");
const Checkout = require("../models/checkoutSchema");
const asyncWrapper = require("../middleware/async");

exports.getOrderByUserId = async (req, res, next) => {
  const { refUser: buyerId } = req.params;
  const order = await Order.find({ buyerId });
  res.status(200).send({ order });
};

exports.postOrderByUserId = asyncWrapper(async (req, res, next) => {
  const { buyerId } = req.params;
  // create an error to handle a case where id is an empty array
  // id will be an array of items id
  const { id } = req.body;
  if (!Array.isArray(id)) {
    id = [id];
  }
  const itemsInOrder = await findAndDeleteByIds(Checkout, id, buyerId);

  await Order.create(itemsInBasket);
  res.status(200).send({ itemsInOrder });
});

exports.deleteItemFromOrder = asyncWrapper(async (req, res, next) => {
  const { refUser } = req.params;
  const { id } = req.body;
  const deletedItem = await Order.findOneAndDelete({
    buyerId: refUser,
    _id: id,
  });
  res.status(200).send({ deletedItem });
});
