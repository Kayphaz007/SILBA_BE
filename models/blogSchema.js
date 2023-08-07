const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    author: { type: String, required: true},
    title: { type: String, required: true},
    votes: { type: Number, default: 0 },
    body: { type: String, required: true},
    img_url: { type: String, required: true},
    
},

{
    timestamps: {createdAt: true, updatedAt: false}
})

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog;