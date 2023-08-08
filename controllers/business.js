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
  const { business_name,
    location,
    address,
    images,
    long_description,
    description,
    category,
    business_rating,
    business_id,
    votes,
    review_count } = req.body;
  const newBusiness = await Business.create({ business_name, 
    location, 
    address, 
    images, 
    description, 
    long_description,
    category, 
    business_rating,
    business_id, 
    votes, 
    review_count })
    res.status(200).send({newBusiness})
};
