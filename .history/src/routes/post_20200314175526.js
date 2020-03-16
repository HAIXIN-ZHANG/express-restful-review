const express = require("express");
const {
    getAllPost,
    addPost,
    updatePostById,
    deletePostById,
    getPostById,
} = require("../controllers/post");

const router = express.Router();