const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log("DB접속완료");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
