const express = require("express");
const router = express.Router();
const { getAllBlogPosts, postBlog } = require("../controllers/blog");

router.route("/").get(getAllBlogPosts).post(postBlog);

module.exports = router;
