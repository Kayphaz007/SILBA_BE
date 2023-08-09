const errorHandlerMiddleware = async (err, req, res, next) => {
  let msg = "Something went wrong";
  if (err.name == "CastError") {
    msg = "Used wrong Id";
    return res.status(400).json({ msg, err });
  }
  return res.status(500).json({ msg, err });
};

module.exports = { errorHandlerMiddleware };
