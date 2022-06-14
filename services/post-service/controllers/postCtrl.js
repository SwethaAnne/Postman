var mongoose = require('mongoose');
var postSchema = require('../../../schema/Post');

function createPost(req, res) {
    
    try {

        var new_post = {};

        if (!req.body.title) {
            throw new Error ("title is required");
        } else {
            new_post["title"] = req.body.title;
        }

        if (!req.body.user_id) {
            throw new Error ("user id is required");
        } else {
            new_post["user_id"] = req.body.user_id;
        }

        if (req.body.description) {
            new_post["description"] = req.body.description;
        }

        postSchema.create(new_post).then((created_post) => {
            console.log(created_post, 'created_post');
            return res.status(200).json({
                success: true,
                created_post
            })
        }).catch(err => {
            console.log(err, 'err while creating post');
            return res.status(500).json({
                success: false,
                error_message: err
            })
        })

    } catch (err) {
        console.log(err, 'err caught');
        return res.status(500).json({
            success: false,
            error_message: err.message
        })
    }
}

function deletePost(req, res) {
    
    try {

        if (!req.query.post_id) {
            throw new Error ("Post id is required");
        }

        postSchema.findByIdAndDelete(req.query.post_id).then((deleted_post) => {
            console.log(deleted_post, 'deleted post');
            return res.status(200).json({
                success: true,
                message: "Post deleted successfully!"
            });
        }).catch(err => {
            console.log(err, 'err while deleting post');
            return res.status(500).json({
                success: false,
                error_message: err
            })
        })

    } catch (err) {
        console.log(err, 'err caught');
        return res.status(500).json({
            success: false,
            error_message: err.message
        })
    }
}

function updatePost(req, res) {
    
    try {

        if (!req.body.post_id) {
            throw new Error("Post id is required");
        }

        var update_post = {};

        if (req.body.title) {
            update_post["title"] = req.body.title;
        }

        if (req.body.description) {
            update_post["description"] = req.body.description;
        }

        if (req.body.user_id) {
            update_post['user_id'] = req.body.user_id;
        }

        postSchema.findByIdAndUpdate(req.body.post_id, update_post).then(updated_post => {
            console.log(updated_post, 'updated post');
            return res.status(200).json({
                success: true,
                message: "Post updated successfully!"
            });
        }).catch(err => {
            console.log(err, 'err while updating post');
            return res.status(500).json({
                success: false,
                error_message: err
            })
        })

    } catch (err) {
        console.log(err, 'err caught');
        return res.status(500).json({
            success: false,
            error_message: err.message
        })
    }
}

function getAllPosts(req, res) {
    
    try {

        postSchema.find().then(posts => {
            console.log(posts, 'posts');
            return res.status(200).json({
                success: true,
                posts
            })
        }).catch(err => {
            console.log(err, 'err while getting posts');
            return res.status(500).json({
                success: false,
                error_message: err
            })
        })

    } catch (err) {
        console.log(err, 'err caught');
        return res.status(500).json({
            success: false,
            error_message: err.message
        })
    }
}

function getPost(req, res) {
    
    try {

        if (!req.query.post_id) {
            throw new Error ("post id is required");
        }

        postSchema.findById(req.query.post_id).then(post => {
            console.log(post, 'post');
            return res.status(200).json({
                success: true,
                post
            })
        }).catch(err => {
            console.log(err, 'err while fetching post');
            return res.status(500).json({
                success: false,
                error_message: err
            })
        })

    } catch (err) {
        console.log(err, 'err caught');
        return res.status(500).json({
            success: false,
            error_message: err.message
        })
    }
}

module.exports = {
    createPost,
    deletePost,
    updatePost,
    getAllPosts,
    getPost
}