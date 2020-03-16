const express = require("express");
const {
    getAllPost,
    addPost,
    updatePostById,
    deletePostById,
    getPostById,
} = require("../controllers/post");

const router = express.Router();

router.get("", getAllPost);
router.get("/:id", validateId, getPostById);
router.post("", addPost);
router.put("/:id", updatePostById);
router.delete("/:id", deletePostById);

module.exports = router;


