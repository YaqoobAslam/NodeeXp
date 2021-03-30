var http = require('http')
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/MongoDatabase"
MongoClient.connect(url, function(err, db){
  if(err) throw err
  var query = {address: 'London'}
  db.collection("customers").find(query).toArray(function(err, result){
    if(err) throw err
    console.log(result)
    db.close()
  })
})

var http = require('http')
var MongoClient = require('mongodb').MongoClient
var url =  "mongodb://localhost:27017/MongoDatabase"
MongoClient.connect(url, function(err, db){
  if(err) throw err
  var query = {address: /^G/}
  db.collection("customers").find(query).toArray(function(err, result){
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
  var query = { address: "Islamabad" };
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});