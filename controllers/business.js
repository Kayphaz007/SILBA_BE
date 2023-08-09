const asyncWrapper = require("../middleware/async");
const Business = require("../models/businessSchema");

exports.getBusinessById = asyncWrapper(async (req, res, next) => {
  const { businessId } = req.params;
  const business = await Business.findById(businessId);
  res.status(200).send({ business });
});

exports.getAllBusiness = asyncWrapper(async (req, res, next) => {
  const { category } = req.query;
  if (category) {
    businessByCategory = await Business.find({ category });
    res.status(200).send({ businessByCategory });
  } else {
    const business = await Business.find({});
    res.status(200).send({ business });
  }
});

exports.postBusiness = asyncWrapper(async (req, res, next) => {
  console.log("hello");
  let { ownerId: ownerUserId } = req.params;
  const {
    business_name,
    location,
    address,
    images,
    long_description,
    description,
    category,
    ownerName,
  } = req.body;
  console.log(req.body, req.params);
  const newBusiness = await Business.create({
    business_name,
    location,
    address,
    images,
    long_description,
    description,
    category,
    ownerName,
    ownerUserId,
  });
  res.status(200).send({ newBusiness });
});
