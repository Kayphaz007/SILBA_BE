const express = require('express')
const { makePayment } = require('../controllers/stripe')
const router = express.Router()


router.route('/').post(makePayment)

module.exports = router