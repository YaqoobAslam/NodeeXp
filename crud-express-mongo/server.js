// console.log('May Node with you');

const express = require('express');
const bodyParser= require('body-parser')
const app = express();

var quotesCollection;
var db;

const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb+srv://YaqoobAslam:Ahmad786@786$yokihahalols@cluster0.uajpj.mongodb.net/star-wars-quotes?retryWrites=true&w=majority', {useUnifiedTopology:true})

.then(client =>{
    // console.log('Connected to Database')
     db = client.db('star-wars-quotes')
     quotesCollection = db.collection('quotes')

})
.catch(error => console.error(error))

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))


// app.get('/', (req, res)=>{
  // res.send('Hello world')
//   res.sendFile(__dirname + '/index.html')
// })

app.post('/quotes', (req,res)=>{
  // console.log('Helloooooooooo');
  // console.log(req.body);
  
  quotesCollection.insertOne(req.body)
  .then(result =>{
    // console.log(result)
    res.redirect('/')
  })
  .catch(error => console.error(error))
})

app.get('/', (req,res)=>{
   db.collection('quotes').find().toArray()
   .then(results =>{
     //render the index.html template
    //  console.log(results);
    
    //render the index.ejs template
    res.render('index.ejs', {quotes: results})
   })
   .catch(error => console.error(error))
  
})

app.listen(5000, function(){
  console.log('listening on 5000');
})
