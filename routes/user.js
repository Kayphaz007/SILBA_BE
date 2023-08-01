const express = require ('express')
const router = express.Router()
const {getAllUsers, getUserById} = require('../controllers/user')


router.route('/').get(getAllUsers)
router.route('/:userId').get(getUserById)

module.exports = router