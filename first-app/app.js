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

const data = new User({
  _id: new mongoose.Types.ObjectId(),
  name: "Zeeshan",
  email: "zeeshan@gmail.com",
  address: "Lahore",
});

data
  .save()
  .then((result) => {
    console.warn(result);
  })
  .catch((err) => console.warn(err));
