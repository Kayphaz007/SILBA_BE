const Business = require("../models/businessSchema");


exports.getBusinessById = async (req, res, next) => {
  const { businessId } = req.params;
  const business = await Business.findById(businessId);
  res.status(200).send({ business });
};

exports.getAllBusiness = async (req, res, next) => {
 const {category} = req.query 
 if (category) {
  businessByCategory = await Business.find({category})
  res.status(200).send({businessByCategory})
 } else {
  const business = await Business.find({});
  res.status(200).send({ business });
 }
};

exports.postBusiness = async (req, res, next) => {
  const { businessName,
    location,
    address,
    images,
    long_description,
    description,
    category,
    businessRating,
    businessId,
    votes,
    reviewCount } = req.body;
  const newBusiness = await Business.create({ businessName, 
    location, 
    address, 
    images, 
    description, 
    long_description,
    category, 
    businessRating,
    businessId, 
    votes, 
    reviewCount })
    res.status(200).send({newBusiness})
};
