const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("미들웨어!");
  next();
});

module.exports = app;
