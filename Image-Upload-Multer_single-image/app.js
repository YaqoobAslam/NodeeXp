const express = require('express')
const multer = require('multer')
const ejs = require('ejs')
const path = require('path')

const app = express()

// Set storage engine
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filedname: function(req, file, cb){
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)) 
  }
})

// Initialize Upload Variable
const upload = multer({
  storage: storage,
  limits: {fileSize: 5242880},
  fileFilter: function(req,file, cb){
    checkfileType(file, cb);
  }
}).single('myImage')

// Check file type
function checkfileType(file, cb){
  // Check extension
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check the minetype
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null, true)
  }
  else{
   cb('Error: Image Only!')
  }
}

app.set('view engine', 'ejs')
app.use(express.static('./public'))

app.get('/', (req, res)=> res.render('index'))

app.post('/upload', (req, res)=>{
  // res.send('test')
  upload(req,res, (err)=>{
    if(err){
      res.render('index', {
        msg: err
      })
    }else {
      console.log(req.file)
      // res.send(req.file)
      // res.send('Successfully Uploaded')

      if(req.file == undefined) {
        res.render('index', {
          msg: 'Error: No File Selected!'
        })
      }
      else {
        res.render('index', {
          msg: 'File Uploaded!',
          file: `uploads/${req.file.filename}`
        })
      }
    }
  })
})
const port = 3000
app.listen(port, ()=> console.log(`Server started on port ${port}`))

