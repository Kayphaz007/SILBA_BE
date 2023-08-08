const asyncWrapper = require("../middleware/async");

const stripe = require("stripe")(process.env.STRIPE_KEY);

exports.makePayment = asyncWrapper(async (req, res, next) => {
  const payment = await stripe.charges.create({
    source: "tok_visa",
    amount: req.body.amount,
    currency: "GBP",
  });
  res.status(200).send({ payment });
});
