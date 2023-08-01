const User = require('../models/userSchema')

exports.getAllUsers = async (req, res, next) =>{
    const user = await User.find({});
    res.status(200).send({ user });
}