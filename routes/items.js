const express = require("express");
const router = express.Router();
const {
  getAllItems,
  getItemById,
  postItem,
  deleteItem,
} = require("../controllers/items");

router.route("/").get(getAllItems).post(postItem);
router.route("/:itemId").get(getItemById).delete(deleteItem);

module.exports = router;
