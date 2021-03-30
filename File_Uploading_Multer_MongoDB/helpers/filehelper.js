'use strict'
const multer = require('multer')
const path =require('path')

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads')
  },
  filename: (req, file, callback) =>{
    callback(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname)
  }
}) 

const filefilter = (req, file, callback) =>{
  if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
    callback(null, true)
  }else {
    callback(null, false)
  }
}
const upload = multer({storage: storage, fileFilter: filefilter})
module.exports = {upload}

