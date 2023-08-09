const db = require("../connect");
const Business = require("../../models/businessSchema");
const User = require("../../models/userSchema");
const Item = require("../../models/itemSchema");
const Basket = require("../../models/basketSchema");
const Reviews = require("../../models/reviewSchema");
const Blog = require("../../models/blogSchema");
const Checkout = require("../../models/checkoutSchema");
// const { businessJson } = require("../data/test-data");
// const data = require("../data/test-data")

const seed = async (data) => {
  const {
    businessJson,
    userJson,
    reviewJson,
    blogJson,
    itemsJson,
    basketJson,
    checkoutJson,
  } = data;
  try {
    db();
    // similar to drop database
    await User.deleteMany();
    await User.create(userJson);
    // get all user id
    let allUser = await User.find();
    allUser = allUser.map(({ _id, username }) => {
      return { userId: _id.toString(), username };
    });

    await Business.deleteMany();
    let newBusinessJson = businessJson.map((business) => {
      let { userId, username } = allUser[Math.floor(Math.random() * 6 + 1)];
      return {
        ...business,
        ownerUserId: userId,
        ownerName: username,
      };
    });
    await Business.create(newBusinessJson);

    // get all business id
    let allBusiness = await Business.find();
    allBusiness = allBusiness.map(
      ({
        ownerUserId,
        _id: businessId,
        business_name: businessName,
        ownerName,
      }) => {
        return {
          ownerUserId: ownerUserId.toString(),
          businessId: businessId.toString(),
          businessName,
          ownerName,
        };
      }
    );

    await Item.deleteMany();
    let newItemsJson = itemsJson.map((items) => {
      let index = Math.floor(Math.random() * 7 + 1);
      let {
        ownerUserId,
        businessId,
        businessName: sellerBusinessName,
        ownerName: sellerUsername,
      } = allBusiness[index];
      return {
        ...items,
        sellerId: ownerUserId,
        businessId,
        sellerBusinessName,
        sellerUsername,
        // quantity: Math.floor(Math.random() * 7 + 1),
      };
    });
    await Item.create(newItemsJson);

    await Basket.deleteMany();
    let newBasketJson = newItemsJson.map((items) => {
      let index = Math.floor(Math.random() * 7 + 1);
      let { ownerUserId: buyerUserId } = allBusiness[index];
      return {
        ...items,
        buyerId: buyerUserId,
        quantity: Math.floor(Math.random() * 7 + 1),
      };
    });
    await Basket.create(newBasketJson);
    await Reviews.deleteMany();
    let newReviewJson = reviewJson.map((review) => {
      let index = Math.floor(Math.random() * 15 + 1);
      let { userId, username } = allUser[index];
      let { businessId, businessName } =
        allBusiness[Math.floor(Math.random() * 8 + 1)];
      return { ...review, userId, username, businessId };
    });
    await Reviews.create(newReviewJson);
    await Blog.deleteMany();
    await Blog.create(blogJson);
    // await Checkout.deleteMany();
    // await Checkout.create(checkoutJson)
  } catch (error) {
    console.log(error);
  }
};

module.exports = seed;
