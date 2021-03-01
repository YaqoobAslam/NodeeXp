var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/submit-student-data", function (req, res) {
  var name = req.body.firstName + " " + req.body.lastName;

  res.send(name + "  Submitted Successfully!");
});

app.listen(4000, function () {
  console.log("Node server is running..");
});
