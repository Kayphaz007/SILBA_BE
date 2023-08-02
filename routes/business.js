const express = require("express");
const router = express.Router();
const { getAllBusiness, getBusinessById } = require("../controllers/business");

router.route("/").get(getAllBusiness);
router.route("/:businessId").get(getBusinessById);

module.exports = router;
