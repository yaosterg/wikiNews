const express = require("express");
const mainRouter = express.Router();
const userRouter = require("./users");
const wikiRouter = require("./wiki");

mainRouter.get("/", (req, res) => {
  res.send("hi this is it");
});

mainRouter.use("/users", userRouter);
mainRouter.use("/wiki", wikiRouter);

module.exports = mainRouter;
