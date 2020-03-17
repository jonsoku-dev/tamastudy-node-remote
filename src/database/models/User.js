const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "유저명을 입력해주세요. "]
  },
  email: {
    type: String,
    required: [true, "이메일을 입력해주세요."],
    unique: [true, "이메일이 중복됩니다."],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "이메일이 양식에 맞지 않습니다."
    ]
  },
  password: {
    type: String,
    required: [true, "패스워드를 입력해주세요."]
  },
  posts: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Post"
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
