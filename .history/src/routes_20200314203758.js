const express = require("express");
const postRoute = require("./routes/post");
const router = express.Router();

router.use("/posts", postRoute);

module.exports = router;