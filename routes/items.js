const express = require("express")
const router = express.Router();
const {getAllItems, getItemById, postItem, deleteItem} = require("../controllers/items")

router.route("/").get(getAllItems);
router.route("/:itemId").get(getItemById);
router.route("/").post(postItem);
router.route("/:itemId").delete(deleteItem)

module.exports = router;