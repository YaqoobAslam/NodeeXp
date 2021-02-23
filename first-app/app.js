const express = require("express");
const app = express();
const mongoose = require("mongoose");

const User = require("./models/users");

mongoose.connect(
  "mongodb+srv://YaqoobAslam:Ahmad786@786$yokihahalols@cluster0.lx1pt.mongodb.net/Test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.get("/users", function (req, res) {
  User.find().select('name').then((data) => {
    res.status(201).json(data);
  });
});

app.listen(5000);
