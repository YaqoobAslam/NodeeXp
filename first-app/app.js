const express = require("express");
const app = express();
const mongoose = require("mongoose");

const User = require("./users");
mongoose
  .connect(
    "mongodb+srv://YaqoobAslam:Ahmad786@786$yokihahalols@cluster0.lx1pt.mongodb.net/Test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.warn("db connection done");
  });

User.find({}, function (err, users) {
  if (err) console.warn(err);
  console.warn(users);
});
