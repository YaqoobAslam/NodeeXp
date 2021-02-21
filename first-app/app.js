
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

app.post('/login', function(req,res){
  res.send('This is Login Post Page')
})

app.put('/login', function(req,res){
  res.send('This is Login Put Page')
})

app.delete('/login', function(req,res){
  res.send('This is Login Delete Page')
})


app.listen(4000)