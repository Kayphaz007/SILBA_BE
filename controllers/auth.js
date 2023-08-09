const User = require("../models/userSchema");
const ErrorResponse = require("../utils/errorResponse");

exports.registerUsers = async (req, res, next) => {
  const { username, fullName, password, email } = req.body;
  const user = await User.create({ username, fullName, password, email });

  const token = user.getSignedJwtToken();

  res.status(204).send({ success: true, token, data: user });
};

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorResponse("please provide email and password"), 400);
  }
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorResponse("Invalid credentials"), 401);
  }

  const passwordMatcher = await user.matchPassword(password);

  if (!passwordMatcher) {
    return next(new ErrorResponse("Invalid credentials"), 401);
  }

  const token = user.getSignedJwtToken();

  res.status(204).send({ success: true, token });
};
