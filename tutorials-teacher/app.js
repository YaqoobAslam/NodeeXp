var MongoClient = require("mongodb").MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/MyDb", function (err, db) {
  db.collection("Persons", function (err, collection) {
    collection.insert({ id: 1, firstName: "Steve", lastName: "Jobs" });
    collection.insert({ id: 2, firstName: "Bill", lastName: "Gates" });
    collection.insert({ id: 3, firstName: "James", lastName: "Bond" });

    db.collection("Persons").count(function (err, count) {
      if (err) throw err;

      console.log("Total Rows: " + count);
    });
  });
});

var MongoClient = require("mongodb").MongoClient;
// Connect to the db
MongoClient.connect("mongodb://localhost:27017/MyDb", function (err, db) {
  db.collection("Persons", function (err, collection) {
    collection.update(
      { id: 1 },
      { $set: { firstName: "James", lastName: "Gosling" } },
      { w: 1 },
      function (err, result) {
        if (err) throw err;
        console.log("Document Updated Successfully");
      }
    );
    collection.remove({ id: 2 }, { w: 1 }, function (err, result) {
      if (err) throw err;
      console.log("Document Removed Successfully");
    });
  });
});
