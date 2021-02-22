module.exports = function(req,res, next){
  console.log("Current url is from other file ", req.originalUrl)
  next()
}