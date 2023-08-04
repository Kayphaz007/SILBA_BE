const express = require ('express')
const { getCheckoutByUserId, deleteCheckoutItem } = require('../controllers/checkout')
const router = express.Router()



router.route('/:refUser').get(getCheckoutByUserId)
router.route('/:refUser').delete(deleteCheckoutItem)

module.exports = router