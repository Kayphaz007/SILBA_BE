const express = require('express')
const router = express.Router()
const { getAllBlogPosts, postBlog } = require('../controllers/blog')

router.route('/').get(getAllBlogPosts)

router.route('/').post(postBlog)

module.exports = router