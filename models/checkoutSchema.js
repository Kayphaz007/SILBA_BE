const mongoose = require("mongoose");

const checkoutSchema = new mongoose.Schema({
    itemname: {
      type: String,
      required: true,
    },

    image: {
      type: String, 
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    refUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', 
    required: true,
    },
  });
  
  const Checkout = mongoose.model('Checkout', checkoutSchema);
  
  module.exports = Checkout;