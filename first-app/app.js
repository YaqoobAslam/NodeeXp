
const express = require('express')
const app = express()

app.get('/',function(req, res){
  res.send('This is Home Page')
})
app.get('/about', function(req,res){
  res.send('This is About Page')
})
app.get('/login', function(req,res){
  res.send('This is Login Page')
})

app.listen(4000)