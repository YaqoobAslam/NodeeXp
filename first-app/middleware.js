const express = require('express')
const app = express()
const router = express.Router()


const checkUrl = function(req,res,next) {
  console.warn('Current URL:' + req.originalUrl);
  next()
}
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