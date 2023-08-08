const express = require("express");
const router = express.Router();
const {
  getAllItems,
  getItemById,
  postItem,
  deleteItem,
  patchItemPrice,
} = require("../controllers/items");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

router.route("/").get(getAllItems);
router.route("/:itemId").get(getItemById);
router.route("/").post(upload.single("image"), postItem);
router.route("/:itemId").delete(deleteItem);
router.route("/:itemId").patch(patchItemPrice)

module.exports = router;
