const express = require('express');
const { registerUsers, loginUser } = require('../controllers/auth');
const router = express.Router()



router.post('/register',registerUsers)
router.post('/login', loginUser)

module.exports = router;