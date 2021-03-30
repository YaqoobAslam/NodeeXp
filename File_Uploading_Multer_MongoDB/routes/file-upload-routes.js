'use strict'

const express = require('express')
const { upload } = require('../helpers/filehelper')
const { singleFileUpload } = require('../controllers/fileuploaderController')
const { multipleFileUpload } = require('../controllers/fileuploaderController')
const { getallSingleFiles } = require('../controllers/fileuploaderController')
const { getallMultipleFiles } = require('../controllers/fileuploaderController')
const router = express.Router();


router.post('/singleFile', upload.single('file'), singleFileUpload)
router.post('/multipleFiles', upload.array('files'), multipleFileUpload)
router.get('/getSingleFiles', getallSingleFiles)
router.get('/getMultipleFiles', getallMultipleFiles)


module.exports = {routes: router}   