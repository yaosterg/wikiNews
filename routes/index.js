const express = require("express");
const mainRouter = express.Router();
const userRouter = require("./users");
const wikiRouter = require("./wiki");

// mainRouter.get('/', (req, res) => {
//   res.send('hi from from /routes/index.js');
// });

mainRouter.get("/", (req, res) => {
  res.redirect("/wiki");
});

mainRouter.use("/users", userRouter);
mainRouter.use("/wiki", wikiRouter);

module.exports = mainRouter;
