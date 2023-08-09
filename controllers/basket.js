const asyncWrapper = require("../middleware/async");
const Basket = require("../models/basketSchema");
const Item = require("../models/itemSchema");

exports.getAllItemsInBasket = asyncWrapper(async (req, res, next) => {
  const basket = await Basket.find({});
  res.status(200).send({ basket });
});
exports.getBasketByUserId = asyncWrapper(async (req, res, next) => {
  const { buyerId } = req.params;
  const basket = await Basket.find({ buyerId });
  res.status(200).send({ basket });
});

exports.postBasketByUserId = asyncWrapper(async (req, res, next) => {
  const { buyerId } = req.params;
  const { itemId } = req.body;
  const findItem = await Item.findById(itemId);
  if (!findItem) {
    console.log({ findItem });
    return Promise.reject("Item not found");
  }

  let {
    sellerId,
    sellerBusinessName,
    sellerUsername,
    itemName,
    itemDescription,
    itemImage,
    itemLocation,
    addressForCollection,
    itemPrice,
    itemRating,
    stockCount,
    deliveryOrCollection,
    businessId,
  } = findItem;
  // console.log(findItem._id);
  const sentItem = await Basket.create({
    sellerId,
    sellerBusinessName,
    sellerUsername,
    itemName,
    itemDescription,
    itemImage,
    itemLocation,
    addressForCollection,
    itemPrice,
    itemRating,
    stockCount,
    deliveryOrCollection,
    businessId,
    buyerId,
  });
  res.status(200).send({ sentItem });
});

exports.patchItemQuantityInBasket = asyncWrapper(async (req, res, next) => {
  const { buyerId } = req.params;
  const { itemId: _id, quantity } = req.body;
  let { quantity: itemQuantity } = await Basket.findOne({ buyerId, _id });
  if (+quantity > 0 && itemQuantity >= 0) {
    itemQuantity += 1;
  } else if (+quantity < 0 && itemQuantity > 0) {
    itemQuantity -= 1;
  }
  let itemInBasket = await Basket.findByIdAndUpdate(_id, {
    quantity: itemQuantity,
  });
  res.status(200).send({ sucess: true, itemInBasket });
});

exports.deleteItemFromBasket = asyncWrapper(async (req, res, next) => {
  const { buyerId } = req.params;
  const { basketId: _id } = req.body;
  const deletedItem = await Basket.deleteOne({ _id, buyerId });
  const { acknowledged, deletedCount } = deletedItem;
  res.status(200).send({ success: deletedCount > 0, acknowledged });
});
