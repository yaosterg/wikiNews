const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("user.js");
});

module.exports = userRouter;
