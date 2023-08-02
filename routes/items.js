const express = require("express")
const router = express.Router();
const {getAllItems, getItemById, postItem} = require("../controllers/items")

router.route("/").get(getAllItems)
router.route("/:itemId").get(getItemById);
router.route("/").post(postItem)

module.exports = router;