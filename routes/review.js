const express = require('express')
const router = express.Router()
const { getReviews, postReviews } = require('../controllers/review')


router.route('/').get(getReviews)

router.route('/').post(postReviews)


module.exports = router