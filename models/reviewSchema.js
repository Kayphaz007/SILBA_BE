const mongoose = require('mongoose')
const User = require('./userSchema')

const reviewSchema = new mongoose.Schema({
    reviews: { type: String, required: true},
    reviewVote: { type: Number, default: 0},
    business: { type: mongoose.Schema.Types.ObjectId, ref :'Business', required: true},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    

},
{
    timestamps: {createdAt: true, updatedAt: false}
}

)

const Reviews = mongoose.model('Review', reviewSchema)

module.exports = Reviews;

