var express = require('express');
var router = express.Router();
const fs = require('fs');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: 'uploads/images',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage });

router.get('/', function(req, res, next) {
  res.render('index', { title: 'File Upload Demo' });
});

router.get('/upload-image', (req, res, next) => {
  fs.readdir('uploads/images', (err, files) => {
    res.render('upload-image', { title: 'Upload Images', files: files });
  });
});

router.post('/upload-image', upload.single('image'), (req, res, next) => {
  res.redirect('/');
});

module.exports = router;
