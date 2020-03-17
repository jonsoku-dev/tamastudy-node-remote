const express = require("express");
const userRoutes = require("./v1/user.routes");
const postRoutes = require("./v1/post.routes");

const router = express.Router();

router.use("/v1/user", userRoutes);
router.use("/v1/post", postRoutes);

module.exports = router;
