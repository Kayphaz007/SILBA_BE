const asyncWrapper = require("../middleware/async");
const Basket = require("../models/basketSchema");
const Item = require("../models/itemSchema");

exports.getBasketByUserId = asyncWrapper(async (req, res, next) => {
  const { refUser } = req.params;
  const basket = await Basket.find({ refUser });
  res.status(200).send({ basket });
});

exports.postBasketByUserId = asyncWrapper(async (req, res, next) => {
  const { refUser } = req.params;
  const { id } = req.body;
  const findItem = await Item.findById(id);
  if (!findItem) {
    return Promise;
  }
  const { itemname, description, image, price } = findItem;
  const sentItem = await Basket.create({
    itemname,
    description,
    image,
    price,
    refItem: id,
    refUser: refUser,
  });
  res.status(204).send({ sentItem });
});

exports.deleteItemFromBasket = asyncWrapper(async (req, res, next) => {
  const { refUser } = req.params;
  const { id } = req.body;
  const deletedItem = await Basket.findOneAndDelete({
    refUser: refUser,
    refItem: id,
  });
  res.status(200).send({ success: true, deletedItem });
});
