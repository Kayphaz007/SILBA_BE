const asyncWrapper = require("../middleware/async");
const Business = require("../models/businessSchema");
const Item = require("../models/itemSchema");
const User = require("../models/userSchema");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

exports.getAllItems = asyncWrapper(async (req, res, next) => {
  const items = await Item.find({});
  res.status(200).send({ items });
});

exports.getItemById = asyncWrapper(async (req, res, next) => {
  const { itemId } = req.params;
  const item = await Item.findById(itemId);
  res.status(200).send({ item });
});

exports.postItem = asyncWrapper(async (req, res, next) => {
  const { itemname, description, price, refUser } = req.body;
  const image = req.file;
  const result = await cloudinary.uploader.upload(image.path, {
    resource_type: "image",
    folder: "silba-project",
  });
  console.log(result);

  const item = await Item.create({
    itemname,
    description,
    image: result.secure_url,
    price,
    refUser,
  });

  res.status(200).send({ data: item });
});

exports.deleteItem = asyncWrapper(async (req, res, next) => {
  const { itemId } = req.params;
  const deletedItem = await Item.findByIdAndDelete(itemId);
  res.status(200).send({ success: true, deletedItem });
});

exports.patchItemPrice = asyncWrapper(async (req, res, next) => {
  const { itemId } = req.params;
  const { price } = req.body;
  const item = await Item.findByIdAndUpdate(itemId, { price }, { new: true });
  res.status(200).send({ itemUpdated: item });
});
