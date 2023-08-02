const Business = require("../models/businessSchema");

exports.getAllBusiness = async (req, res, next) => {
  const business = await Business.find({});
  res.status(200).send({ business });
};

exports.getBusinessById = async (req, res, next) => {
  const { businessId } = req.params;
  const business = await Business.findById(businessId);
  res.status(200).send({ business });
};
