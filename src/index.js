require("dotenv").config({ path: "./config.env" });
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const connectDB = require("./database/connectDB");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 4000;

connectDB();

app.use(helmet(), cors(), bodyParser.json(), morgan("dev"));

app.use(routes);

app.listen(PORT, () => console.log(`${PORT}번 서버 기동 중 ...`));
