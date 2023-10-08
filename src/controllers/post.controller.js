const path = require("path")
const Post = require("../models/post.model")

const loadCreatePost = (req, res) => {
    try {
        const path = req.pathname


        res.render("admin/create-post", { path })
    } catch (error) {

    }
}

const createPost = async (req, res) => {
    try {
        const post = {
            title: req.body?.title,
            slug: req.body?.slug,
            thumbnail: req.file.filename,
            content: req.body?.content,
        }
        const result = await Post.create(post)
        if (result) {
            res.render("admin/create-post", {
                message: "Post added successfully"
            })
        }

    } catch (error) {

    }
}



const loadAllPost = async (req, res) => {
    try {

        const posts = await Post.find()

        res.render("blog", {
            posts,
        })


    } catch (error) {

    }
}


module.exports = {
    loadCreatePost,
    createPost,
    loadAllPost
}