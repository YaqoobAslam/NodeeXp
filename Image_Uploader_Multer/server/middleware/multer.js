const multer = require('multer')

// set storage
var storage = multer.diskStorage({
  destination: function(req,file, callback){
    callback(null, 'uploads')
  },

  filename: function(req, file, callback){
    // image.jpg
    var ext = file.originalname.substr(file.originalname.lastIndexOf('.'))

    callback(null, file.fieldname +'-'+ Date.now() + ext)
  }
}) 

// store = multer({storage: storage})
module.exports = store = multer({storage: storage})
