const express = require("express");
const {
  getCheckoutByUserId,
  deleteItemFromCheckout,
} = require("../controllers/checkout");
const router = express.Router();

router.route("/:refUser").get(getCheckoutByUserId);
router.route("/:refUser").delete(deleteItemFromCheckout);

module.exports = router;
