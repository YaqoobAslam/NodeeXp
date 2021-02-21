var fs = require('fs')

var rs = fs.createReadStream('./app.txt')
rs.on('open',function(){
  console.log("App.txt file is open");
})



