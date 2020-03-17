const User = require("../../database/models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find(); // []
    res.status(200).json({
      success: true,
      error: null,
      data: users
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
      data: null
    });
  }
};

exports.signup = async (req, res, next) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: "이메일이 존재합니다. ",
        data: null
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    });

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      noTimestamp: true
    });

    res.status(201).json({
      success: true,
      error: null,
      data: token
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
      data: null
    });
  }
};
