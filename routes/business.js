const express = require('express')
const router = express.Router()
const { getAllBusiness } = require('../controllers/business')


router.route('/').get(getAllBusiness)


module.exports = router;