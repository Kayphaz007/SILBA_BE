const asyncWrapper = require("../middleware/async");
const User = require("../models/userSchema");

exports.getAllUsers = asyncWrapper(async (req, res, next) => {
  const users = await User.find({});
  res.status(200).send({ users });
});

exports.getUserById = asyncWrapper(async (req, res, next) => {
  const { userId } = req.params;
  // res.status(200).send({ userId });
  const user = await User.findById(userId);
  res.status(200).send({ user });
});
