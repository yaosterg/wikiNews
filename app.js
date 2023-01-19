const express = require("express");
const morgan = require("morgan");
const path = require("path");
const views = require("./views");
const { db, User, Page } = require("./models/index");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/routes", require("./routes"));

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send(views.addPage());
});

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.get("/wiki", (req, res) => {
  res.send("Hi");
});

const init = async () => {
  await db.sync();
  // await User.create({ name: "abc", email: "abc@example.com" });

  app.listen("1337", (req, res) => {
    console.log("listening on port 1337");
  });
};

init();
