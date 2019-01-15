const multer = require('multer')
const path = require('path')
const moment = require('moment')
const ImageController = require('../controllers/ImageController')

const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb){
    console.log('FILE: ', file)
    cb(null, moment() + '-' + file.originalname);
  }
})

const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
})

function checkFileType(file, cb){
  const filetypes = /jpeg|jpg|png|gif/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)
  if(mimetype && extname){
    return cb(null,true)
  } else {
    cb('Error: Images Only!')
  }
}

exports.routesConfig = function (app) {

  app.post('/api/upload', upload.single('image'), [
    ImageController.createImageController
  ])

  app.get('/api/image/:foreignId', [
    ImageController.findByIdForeignImageController
  ])

  app.get('/api/upload/:imageId', [
    ImageController.findByIdImageController
  ])

}
