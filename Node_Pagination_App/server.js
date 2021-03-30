const express = require("express")
const app = express()
const mongoose = require('mongoose')

const users = require('./users')
mongoose.connect('mongodb://localhost:27017/EmployeeDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true, 
  })

const db = mongoose.connection
db.once('open', async() => {
  if(await users.countDocuments().exec()) return
  
  Promise.all([
    users.create({name: "User 1"}),
    users.create({name: "User 2"}),
    users.create({name: "User 3"}),
    users.create({name: "User 4"}),
    users.create({name: "User 5"}),
    users.create({name: "User 6"}),
    users.create({name: "User 7"}),
    users.create({name: "User 8"}),
    users.create({name: "User 9"}),
    users.create({name: "User 10"}),

  ])
})
// Paginate this users array
app.get("/users", paginatedData(users), (req, res) => {
  res.json(res.paginatedResult)
});

// Wrapping up the whole pagination code in middleware api function.
// Model is our data which is comming from the database.

function paginatedData(model) {
  return async(req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    // const result = users.slice(startIndexendIndex)
    
    const results = {};

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }

    if (endIndex < await model.countDocuments().exec()) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    try{
      results.result = await model.find().limit(limit).skip(startIndex).exec()
      res.paginatedResult = results

      next()
    }catch(e) {
      res.status(500).json({message: e.message})
    }
    
  };
}

app.listen(4000, () => {
  console.log("Server is listening on the Port 4000");
});
