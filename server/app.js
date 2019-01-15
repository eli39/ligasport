global.__base = __dirname + '/'
const express = require('express')
const multer = require('multer')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PATCH, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  if ('OPTIONS' === req.method) {
    res.status(200).send('OK')
  }
  else {
    next()
  }
})
//MONGODB
mongoose.connect('mongodb://localhost:27017/ligasport', { useCreateIndex: true, useNewUrlParser: true })
mongoose.Promise = global.Promise
console.log('MongoDB connected')
//ROUTES
const AuthorizationRouter = require('./src/routers/AuthRouter')
const UsersRouter = require('./src/routers/UserRouter')
const RoleRouter = require('./src/routers/RoleRouter')
const LeagueRouter = require('./src/routers/LeagueRouter')
const ImageRouter = require('./src/routers/ImageRouter')
//MORGAN
const morgan = require('morgan')
//PORT
app.set('port', process.env.PORT || 9000)
//BODYPARSER
app.use(bodyParser.json({limit:'50mb'}))
//URLENCODED
app.use(bodyParser.urlencoded({extended:true, limit:'50mb'}))
//CORS
app.use(cors())
//PUBLIC
app.use(morgan('dev'))
app.use(express.static('./public'))
//ROUTERS METHODS
AuthorizationRouter.routesConfig(app)
UsersRouter.routesConfig(app)
RoleRouter.routesConfig(app)
LeagueRouter.routesConfig(app)
ImageRouter.routesConfig(app)
//PING
app.post('/api/ping', function(req, res) {
    return res.status(400).send('Ping.');
})
//SERVER
app.listen(app.get('port'), () => {
	console.log('Server run on port ' + app.get('port'))
})
//EXPORTS APP
module.exports = app
