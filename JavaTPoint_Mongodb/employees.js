var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/ MongoDatabase";  
MongoClient.connect(url, function(err, db) {  
if (err) throw err;  
db.createCollection("employees", function(err, res) {  
if (err) throw err;  
console.log("Collection is created!");  
db.close();  
  }) 
}) 


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("MongoDatabase");
  dbo.createCollection("employees", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});