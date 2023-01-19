const express = require("express");
const wikiRouter = express.Router();
const {
  addPage,
  editPage,
  main,
  userList,
  userPages,
  wikiPage,
} = require("../views");
const { db, Page, User } = require("../models");

wikiRouter.get("/", async (req, res) => {
  const pages = await Page.findAll();
  console.log(pages);
  res.send(main(pages));
});

wikiRouter.post("/", async (req, res, next) => {
  try {
    const { name, email, title, content, status } = req.body;

    const [user, created] = await User.findOrCreate({
      where: { name: name, email: email },
    });

    const post = await Page.create({
      title,
      content,
      status,
    });

    await post.setAuthor(user);

    res.redirect(`/wiki/${post.slug}`);
  } catch (e) {
    next(e);
  }
});

wikiRouter.get("/add", (req, res, next) => {
  res.send(addPage(""));
});

wikiRouter.get("/:slug", async (req, res, next) => {
  try {
    let param = req.params.slug;
    const page = await Page.findOne({ where: { slug: param } });
    if (page === null) {
      res.send("page not found");
    } else {
      res.send(wikiPage(page));
    }
  } catch (e) {
    next(e);
  }
  // res.send(`hit dynamic route at ${req.params.slug}`);
});
module.exports = wikiRouter;
