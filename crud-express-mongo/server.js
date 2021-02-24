// console.log('May Node with you');

const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb+srv://YaqoobAslam:Ahmad786@786$yokihahalols@cluster0.uajpj.mongodb.net/star-wars-quotes?retryWrites=true&w=majority', {useUnifiedTopology:true})
.then(client =>{
  console.log('Connected to Database');
})
.catch(error => console.error(error))

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res)=>{
  // res.send('Hello world')
  res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req,res)=>{
  // console.log('Helloooooooooo');
  console.log(req.body);
})

app.listen(3000, function(){
  console.log('listening on 3000');
})