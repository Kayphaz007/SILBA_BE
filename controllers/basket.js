const Basket = require("../models/basketSchema");
const Item = require("../models/itemSchema");

exports.getBasketByUserId = async (req, res, next) => {
  const { refUser } = req.params;
  const basket = await Basket.find({ refUser: refUser });
  res.status(200).send({ basket });
};

exports.postBasketByUserId = async (req, res, next) => {
  const { refUser } = req.params;
  const { id } = req.body;
  const findItem = await Item.findById(id);
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
};

exports.deleteItemFromBasket = async (req, res, next) => {
  const { refUser } = req.params;
  const { id } = req.body;
  const deletedItem = await Basket.findOneAndDelete({
    refUser: refUser,
    refItem: id,
  });
  res.status(200).send({ success: true, deletedItem });
};
