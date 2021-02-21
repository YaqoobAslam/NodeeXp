var http = require('http')
http.createServer(function(req,res){
  res.write('Hello nodemon tested')
  res.end()
}).listen(3000)

