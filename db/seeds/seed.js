const db = require("../connect");
const Business = require("../../models/businessSchema");
const User = require("../../models/userSchema");
const Reviews = require('../../models/reviewSchema')
// const { businessJson } = require("../data/test-data");
// const data = require("../data/test-data")

const seed = async (data) => {
  const { businessJson, userJson, reviewJson } = data;
  try {
    db();
    // similar to drop database
    await Business.deleteMany();
    await Business.create(businessJson);

    await User.deleteMany();
    await User.create(userJson);

    await Reviews.deleteMany();
    await Reviews.create(reviewJson)
    
  } catch (error) {
    console.log(error);
  }
};

module.exports = seed;
