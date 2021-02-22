const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.get("/profile/:name", function (req, res) {

  // console.warn(req.params.name)
  data = {email: 'test@gmail.com',address: 'noida', skills:['node js', 'javascript', 'vue']}
  res.render("Profile", { name: req.params.name, data: data})
});

app.get("/login", function (req, res) {
  res.render("Login")
});

app.get("/",function(req,res){
  res.render("Home")
})
app.listen(4000);
