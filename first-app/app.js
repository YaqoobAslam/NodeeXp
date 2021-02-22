const express = require("express");
const app = express();
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://YaqoobAslam:Ahmad786@786$yokihahalols@cluster0.lx1pt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/Test', 
{
  useNewUrlParser:true,
  useUnifiedTopology:true
}

).then(()=>{
  console.warn("db connection done");
})
