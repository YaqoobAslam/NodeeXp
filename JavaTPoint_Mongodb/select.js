var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/MongoDatabase"
MongoClient.connect(url, function(err, db){
  if(err) throw err
// var dbo = db.db("MongoDatabase")
  db.collection("employees").findOne({}, function(err, result){
    if(err) throw err
    console.log(result.name)
    db.close()
  })
})


var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/MongoDatabase"

MongoClient.connect(url, function(err, db){
  if(err) throw err
// var dbo = db.db('MongoDatabase')
  db.collection("customers").find({}).toArray(function(err, result){
    if(err) throw err
    console.log(result)
    db.close()
  })
})

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("MongoDatabase");
  dbo.collection("customers").find({}, { projection: { _id: "60448b6d9b797a0484f24a3f", name: "Mahesh Sharma", address: "Ghaziabad" } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("MongoDatabase");
  dbo.collection("customers").find({}, { projection: { address: 0 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

