const User = require('../models/userSchema')

exports.registerUsers = async (req, res, next) =>{
    const { username, fullName, password, email } = req.body
    console.log(req.body)
    const user = await User.create({ username, fullName, password, email })
    
    res.status(200).send({  success: true, data: user })
}