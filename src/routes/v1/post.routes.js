const express = require("express");
const { getPosts } = require("../../controllers/v1/post.controllers");

const router = express.Router();

router.get("/", getPosts);

module.exports = router;
