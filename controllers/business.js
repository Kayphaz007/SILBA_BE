const Business = require('../models/businessSchema')

exports.getAllBusiness = async (req, res, next) =>{
    const business = await Business.find({})
    res.status(200).send({ business })
}