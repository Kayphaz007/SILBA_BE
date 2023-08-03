const express = require ('express')
const router = express.Router()
const {getAllUsers, getUserById} = require('../controllers/user')
const {getBasketByUserId, postBasketByUserId, deleteItemFromBasket} = require('../controllers/basket')


router.route('/').get(getAllUsers)
router.route('/:userId').get(getUserById)
router.route('/basket/:refUser').get(getBasketByUserId)
router.route('/basket/:refUser').post(postBasketByUserId)
router.route('/basket/:refUser').delete(deleteItemFromBasket)
module.exports = router