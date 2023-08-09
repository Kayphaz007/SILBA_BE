const express = require("express");
const router = express.Router();
const {
  getAllBusiness,
  getBusinessById,
  postBusiness,
} = require("../controllers/business");

router.route("/").get(getAllBusiness);
router.route("/:businessId").get(getBusinessById);
router.route("/:ownerId").post(postBusiness);

module.exports = router;
