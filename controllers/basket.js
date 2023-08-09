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

exports.deleteItemFromBasket = asyncWrapper(async (req, res, next) => {
  const { buyerId } = req.params;
  const { basketId } = req.body;
  const deletedItem = await Basket.findByIdAndDelete(
    basketId
  );
  res.status(200).send({ success: true, deletedItem});
});
