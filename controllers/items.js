const Item = require("../models/itemSchema")
const cloudinary = require('cloudinary').v2

          
cloudinary.config({ 
  cloud_name: 'drvaa1jgo', 
  api_key: '745795443419229', 
  api_secret: 'w3zpgq-Ck24Ja7DtW4vAFLZ4WSo' 
});

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
      const { itemname, description, price, refUser } = req.body;
      const image = req.file; 
      const result = await cloudinary.uploader.upload(image.path, {
        resource_type: 'image',
        folder: 'silba-project',
      });
      console.log(result)
  
      const item = await Item.create({
        itemname,
        description,
        image: result.secure_url,
        price,
        refUser,
      });
  
      res.status(200).send({ data: item });
    } catch (err) {
      console.log(err, 'error posting items');
      res.status(500).send('Error posting items');
    }
  };

exports.deleteItem = async (req, res, next) => {
    const {itemId} = req.params
    const deletedItem = await Item.findByIdAndDelete(itemId)
    res.status(200).send({success: true, deletedItem})
}