const express = require("express");
const { getUsers, signup } = require("../../controllers/v1/user.controllers");

const router = express.Router();

router.get("/", getUsers);
router.post("/signup", signup);

module.exports = router;
