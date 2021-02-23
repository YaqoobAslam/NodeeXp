const express = require("express");
const app = express();
const mongoose = require("mongoose");

const User = require("./models/users");

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();


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

app.post("/users", jsonParser, function(req, res){
  // res.end('Post Api will be here.')

  const data = new User({
    _id: new mongoose.Types.ObjectId,
    name: req.body.name,
    email: req.body.email,
    address: req.body.address
  })
  
  data.save().then((result)=>{
    res.status(201).json(result)
  })
  .catch((errer)=>{
    console.warn(errer);
  })
})

app.listen(5000);
