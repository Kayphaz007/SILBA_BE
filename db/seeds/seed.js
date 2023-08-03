const db = require("../connect");
const Business = require("../../models/businessSchema");
const User = require("../../models/userSchema");
const Reviews = require('../../models/reviewSchema')
const Blog = require("../../models/blogSchema");
// const { businessJson } = require("../data/test-data");
// const data = require("../data/test-data")

const seed = async (data) => {
  const { businessJson, userJson, reviewJson, blogJson } = data;
  try {
    db();
    // similar to drop database
    // await Business.deleteMany();
    // await Business.create(businessJson);

    await User.deleteMany();
    await User.create(userJson);

    // await Reviews.deleteMany();
    // await Reviews.create(reviewJson)

    // await Blog.deleteMany();
    // await Blog.create(blogJson)
    
  } catch (error) {
    console.log(error);
  }
};

module.exports = seed;
