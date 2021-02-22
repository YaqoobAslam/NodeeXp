const express = require('express')
const app = express()
const router = express.Router()


const checkUrl = require('./routemiddleware')
// app.use(checkUrl)


app.get('/',function(req, res){
  res.send('This is Home Page')
})
app.get('/about', function(req,res){
  res.send('This is About Page')
})
router.get('/login', checkUrl, function(req,res){
  res.send('This is Login Page')
})
app.use('/',router)
app.listen(4000)