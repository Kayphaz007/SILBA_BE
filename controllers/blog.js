const Blog = require('../models/blogSchema')

exports.getAllBlogPosts = async (req, res, next) =>{
const blogPosts = await Blog.find({})
res.status(200).send({ blogPosts })
}

exports.postBlog = async (req, res, next) =>{
    const { author, title, votes, body, img_url} = req.body
    const post = await Blog.create({ author, title, votes, body, img_url})
    res.status(200).send({success: true, data: post})

}