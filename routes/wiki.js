const express = require('express');
const wikiRouter = express.Router();
const {
  addPage,
  editPage,
  main,
  userList,
  userPages,
  wikiPage,
} = require('../views');
const { db, Page, User } = require('../models');

wikiRouter.get('/', (req, res) => {
  res.send(wikiPage(''));
});

wikiRouter.post('/', async (req, res, next) => {
  try {
    const { name, email, title, content, status } = req.body;

    const user = await User.create({
      name,
      email,
    });

    const post = await Page.create({
      title,
      content,
      status,
    });

    res.redirect('/');
  } catch (e) {
    next(e);
  }
});

wikiRouter.get('/add', (req, res, next) => {
  res.send(addPage(''));
});

module.exports = wikiRouter;
