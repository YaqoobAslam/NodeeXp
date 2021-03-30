var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/ MongoDatabase";  
MongoClient.connect(url, function(err, db) {  
if (err) throw err;  
var myobj = { name: "Ajeet Kumar", age: "28", address: "Delhi" };  
db.collection("employees").insertOne(myobj, function(err, res) {  
if (err) throw err;  
console.log("1 record inserted");  
db.close();  
  })
})



var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("MongoDatabase");
  var myobj = [
   { name: "Mahesh Sharma", age: "25", address: "Ghaziabad"},  
   { name: "Tom Moody", age: "31", address: "CA"},  
   { name: "Zahira Wasim", age: "19", address: "Islamabad"},  
   { name: "Juck Ross", age: "45", address: "London"}
  ];
  dbo.collection("employees").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});