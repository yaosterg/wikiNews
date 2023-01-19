const express = require("express");
const morgan = require("morgan");
const path = require("path");
const views = require("./views");
const { db, User, Page } = require("./models/index");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));

app.use("/", require("./routes"));

db.authenticate().then(() => {
  console.log("connected to the database");
});

const init = async () => {
  await db.sync({ force: true });
  // await User.create({ name: 'abc', email: 'abc@example.com' });

  const PORT = 8000;
  app.listen(PORT, (req, res) => {
    console.log(`listening on port ${PORT}`);
  });
};

init();
