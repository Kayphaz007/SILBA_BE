const express = require("express");
const router = express.Router();
const {
  getAllBusiness,
  getBusinessById,
  postBusiness,
} = require("../controllers/business");

router.route("/").get(getAllBusiness).post(postBusiness);
router.route("/:businessId").get(getBusinessById);

module.exports = router;
