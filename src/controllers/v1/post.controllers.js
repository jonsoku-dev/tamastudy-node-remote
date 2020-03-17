const Post = require("../../database/models/Post");

exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find(); // []
    res.status(200).json({
      success: true,
      error: null,
      data: posts
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
      data: null
    });
  }
};
