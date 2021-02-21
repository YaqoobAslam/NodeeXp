var http = require('http')
http.createServer(function(req, res){
  res.write('Hello from Node Server')
  res.end()
}).listen(5000)
