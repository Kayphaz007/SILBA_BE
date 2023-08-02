const Item = require("../models/itemSchema")

exports.getAllItems = async (req, res, next) => {
    const item = await Item.find({});
    res.status(200).send({item})
}

exports.getItemById = async (req, res, next) => {
    const {itemId} = req.params; 
    const item = await Item.findById(itemId);
    res.status(200).send({item});
}

exports.postItem = async (req, res, next) => {
    try {
const {itemname, description, image, price, refUser} = req.body
const item = await Item.create({itemname, description, image, price, refUser})
res.status(200).send({data: item})
    }catch (err){
        console.log(err, "error posting items")
    }
}

exports.deleteItem = async (req, res, next) => {
    const {itemId} = req.params
    const deletedItem = await Item.findByIdAndDelete(itemId)
    res.status(200).send({success: true, deletedItem})
}