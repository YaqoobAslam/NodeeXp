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
// var http = require('http')

// var page = `
//   <h1> Node.js App</h1>
//   <input type="text" /> <br><br>
//   <input type="text" /> <br><br>
//   <input type="text" /> <br><br>

// `

// http.createServer(function(req, res){

//   res.writeHead(200, {'Content-Type': 'text/html'})

//   res.write(page)
//   res.end()

// }).listen(4000)

//--------------------------------------------------------------
// Capitalize text

// var http = require('http')

// var uc = require('upper-case')

// http.createServer(function(req,res) {

//   res.write(uc.upperCase('Hello from Web Page.'))
//   res.end()

// }).listen(2000)

//-----------------------------------------------------------------

var nodeMailer = require("nodemailer");

var transport = nodeMailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: "happyyaqoob@gmail.com",
    pass: "Ahmad786@786$yokihahalols",
  },

  tls: {
      rejectUnauthorized: false
    }
});

var mailOptions = {
  from: "reach.yaqoob@gamil.com",
  to: "reach.yaqoob@gamil.com",
  subject: "test node mail",
  text: "Thanks for let me know about Node mailer.",
};
transport.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.warn(error);
  } else {
    console.warn("Email has been sent" + info.response);
  }
});
