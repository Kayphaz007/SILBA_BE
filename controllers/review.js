const Reviews = require('../models/reviewSchema')

exports.getReviews = async (req, res, next) =>{
    const reviews = await Reviews.find({})
    console.log(reviews)
    res.status(200).send({ reviews })
}

// exports.getReviews = async (req, res, next) => {
//     try {
//       const reviews = await Reviews.find({});
//       console.log(reviews);
//       res.status(200).send({ reviews });
//     } catch (error) {
//       console.error('Error getting reviews:', error);
//       res.status(500).send({ error: 'Server error' });
//     }
//   };

  exports.postReviews = async (req, res, next) =>{
    try {
      const { reviews, reviewVote, business, user } = req.body
      const review = await Reviews.create({ reviews, reviewVote, business, user })
      res.status(200).send({ success: true, data: review })

    } catch (error){
      console.error('Error posting reviews:', error);
      res.status(500).send({ error: 'Server error' });
    }

  }

