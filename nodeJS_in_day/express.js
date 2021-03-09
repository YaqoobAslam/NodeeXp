var express = require('express')
var app = express()
app.set('view engine', 'jade')

// app.get('/', function(req, res){
//   res.send('Express response!')
// })

app.get('/', function(req, res){
  res.render('index', {title:'Express', message:'Welcome'})
})
app.route('/Node').get(function(req,res){
  res.send('Tutorial on Node!')
})

app.route('/Angular').get(function(req,res){
  res.send('Tutorial on Angular')
})
var server = app.listen(3000, function(){})