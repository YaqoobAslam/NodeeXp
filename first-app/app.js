// var http = require('http')
// http.createServer(function(req, res){
//   res.write('Hello from Node Server')
//   res.end()
// }).listen(5000)


// ------------------------------------------------

//Created Anonymous function
// var add = function(a,b){
//   return a + b;
// }

// function callBack(add){
//   console.warn(300,300)
// }

// Passes add function as callback
// callBack(add)

//---------------------------------------------------

// Other way of callback

// function callBack(add){
//   console.warn(add(300,400))
// }

// callBack(function(a, b){
//   return a + b;
// })

//----------------------------------------------------

// Creted module other and receive here 
// var otherReceive = require('./other')

// console.warn(otherReceive(10,30))

//-----------------------------------------------------

// var http = require('http')
// http.createServer(function(req, res){
//   var data =[
//      {name: "Yaqoob", age: "20", email: "happyyaqoob@gmail.com"},
//      {name: "Ahmad", age: "10", email: "ahmad@gmail.com"},
//      {name: "Hamza", age: "12", email: "hamza@gmail.com"}
//   ]
//   res.writeHead(200, {'Content-Type': 'application\json'})

//   res.write(JSON.stringify(data))
//   res.end()
// }).listen(3000)

//-------------------------------------------------------------
var http = require('http')

var page = `
  <h1> Node.js App</h1>
  <input type="text" /> <br><br>
  <input type="text" /> <br><br>
  <input type="text" /> <br><br>

`

http.createServer(function(req, res){

  res.writeHead(200, {'Content-Type': 'text/html'})

  res.write(page)
  res.end()

}).listen(4000)
