const express = require("express");
const userRouter = express.Router();
const { User } = require("../models");
const { userList } = require("../views");

userRouter.get("/", async (req, res) => {
  const users = await User.findAll();
  res.send(userList(users));
});

module.exports = userRouter;
