const db = require("../connect");
const Business = require("../../models/businessSchema");
const User = require("../../models/userSchema");
const Item = require("../../models/itemSchema")
// const { businessJson } = require("../data/test-data");
// const data = require("../data/test-data")

const seed = async (data) => {
  const { businessJson, userJson, itemsJson } = data;

  try {
    db();
    // similar to drop database
    await Business.deleteMany();
    await Business.create(businessJson);
    await User.deleteMany();
    await User.create(userJson);
    await Item.deleteMany();
    await Item.create(itemsJson);
  } catch (error) {
    console.log(error);
  }
};

module.exports = seed;
