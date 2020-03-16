const express = require("express");
const validateId = require("../middleware/validatedId")
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
router.put("/:id", validateId, updatePostById);
router.delete("/:id", validateId, deletePostById);

module.exports = router;


