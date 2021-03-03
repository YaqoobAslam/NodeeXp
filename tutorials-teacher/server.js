var express = require("express");
var app = express();

// set view engine
app.set("view engine", "jade");
app.get("/", function (req, res) {
  res.render("sample");
});

var server = app.listen(5000, function () {
  console.log("Node server is running..");
});



var express = require("express");
var app = express();

app.set("view engine", "jade");
app.get("/", function (req, res) {
  var sql = require("mssql");
  var config = {
    user: "sa",
    password: "sjkaria",
    server: "localhost",
    database: "SchoolDB",
  };
  sql.connect(config, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query("select * from Student", function (err, recordset) {
      if (err) console.log(err);
      else res.render("StudentList", { studentList: recordset });
    });
  });
});
