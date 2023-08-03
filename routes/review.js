const express = require('express')
const router = express.Router()
const { getReviews, postReviews, getReviewById } = require('../controllers/review')


router.route('/').get(getReviews)

router.route('/').post(postReviews)

router.route('/:businessId').get(getReviewById)


module.exports = router