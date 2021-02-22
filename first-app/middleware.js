const express = require('express')
const app = express()
const router = express.Router()


const checkUrl = require('./routemiddleware')
// app.use(checkUrl)


app.get('/',function(req, res){
  // res.send('This is Home Page')

  res.sendFile(__dirname + "/Home.html")
})
app.get('/about', function(req,res){
  // res.send('This is About Page')

    res.sendFile(__dirname + "/About.html")

})
router.get('/login', checkUrl, function(req,res){
  // res.send('This is Login Page')

    res.sendFile(__dirname + "/Login.html")

})
app.use('/',router)
app.listen(4000)