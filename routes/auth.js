const express = require('express');
const { registerUsers } = require('../controllers/auth');
const router = express.Router()



router.route('/').post(registerUsers)


module.exports = router;