const postModel = require("../models/post")

function addPost(req, res){
    const {author, content} = req.body;
    const newPost = postModel.addPost({author, content});
    return res.status(201).json(newPost);
}

function getPostById(req,res ){
    const {id} = req.params;
    const post = postModel.getPostById(id);
    return res.json(post);
}

function getAllPost(req, res){
    const posts = postModel.getAllPost();
    return res.json(posts);
}
function updatePostById(req, res){
    const id = req.params;
    const {author, content} = res.body;
    const updatePost =postModel.updatePostById(id, {author, content});
    return res.json(updatePost);
}

function deletePostById(req, res){
    const {id} = raq.params;
    const deletePost = postModel.deletePostById(id);
    return res.json(deletePost);
}

module.exports = {
    getAllPost,
    addPost,
    updatePostById,
    deletePostById,
    getPostById,
  }