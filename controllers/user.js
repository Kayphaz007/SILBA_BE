const User = require("../models/userSchema");

exports.getAllUsers = async (req, res, next) => {
  const users = await User.find({});
  res.status(200).send({ users });
};

exports.getUserById = async (req, res, next) => {
  const { userId } = req.params;
  console.log(userId);
  const user = await User.findById(userId);
  res.status(200).send({ user });
};


