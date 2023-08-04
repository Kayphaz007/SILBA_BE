const Basket = require("../models/basketSchema")
const Checkout = require("../models/checkoutSchema")

exports.getCheckoutByUserId = async (req, res, next) => {
    const {refUser} = req.params;
    const checkoutDocs = [];
    const checkoutItems = await Basket.find({ refUser: refUser });

    for (const item of checkoutItems) {
      const { itemname, image, price } = item;
      const checkout = await Checkout.create({
        itemname: itemname,
        image: image,
        price: price,
        refUser: refUser,
      });
      checkoutDocs.push(checkout);
    }

    res.status(200).send({ checkout: checkoutDocs });
  }

  exports.deleteCheckoutItem = async (req, res, next) => {
    const {refUser} = req.params 
const {itemname} = req.body
const deletedCheckoutItem = await Checkout.findOneAndDelete({refUser: refUser, itemname: itemname})
res.status(200).send({deletedItem: deletedCheckoutItem}) 
  }
