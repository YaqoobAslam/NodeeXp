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

var otherReceive = require('./other')

console.warn(otherReceive(10,30))