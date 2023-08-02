const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    itemname: {
      type: String,
      //required: true,
    },
    description: {
      type: String,
     // required: true,
    },
    image: {
      type: String, 
      required: true,
    },
    price: {
      type: Number,
      //required: true,
    },
    refUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', 
    //  required: true,
    },
  });
  
  const Item = mongoose.model('Item', itemSchema);
  
  module.exports = Item;