const multer = require('multer')
const path = require('path')
const moment = require('moment')

const LeagueController = require('../controllers/LeagueController')
const PermissionMiddleware = require('../middlewares/Permission')
const ValidationMiddleware = require('../middlewares/Validation')

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

const config = require('../config/dev')

const ADMIN = config.permissionLevels.ADMIN
const PAID = config.permissionLevels.PAID_USER
const FREE = config.permissionLevels.NORMAL_USER

exports.routesConfig = function (app) {

  app.post('/api/league', upload.single('image'),[
    LeagueController.createLeagueController
  ])
  app.get('/api/league/:leagueId', [
    LeagueController.findByIdLeagueController
  ])
  app.get('/api/league', [
    LeagueController.findAllLeagueController
  ])
  app.get('/api/league/admin/:id_admin', [
    LeagueController.findAllLeaguesByIdAdminController
  ])
}
