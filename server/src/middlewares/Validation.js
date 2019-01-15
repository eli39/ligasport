'use strict'

const fs   = require('fs')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const config = require('../config/dev')

const secret = config.secret
const verify_options = config.options
var public_key  = fs.readFileSync('C:/Users/alvar/Documents/ligasport/server/src/config/public.key', 'utf8')

exports.verifyRefreshBodyField = (req, res, next) => {
  if (req.body && req.body.refresh_token) {
    return next()
  } else {
    return res.status(400).send({error: 'need to pass refresh_token field'})
  }
}

exports.validRefreshNeeded = (req, res, next) => {
  let b = new Buffer(req.body.refresh_token, 'base64')
  let refresh_token = b.toString()
  let hash = crypto.createHmac('sha512', req.jwt.refresh_key).update(req.jwt.user_id + secret).digest("base64")
  if (hash === refresh_token) {
    req.body = req.jwt
    return next()
  } else {
    return res.status(400).send({error: 'Invalid refresh token'})
  }
}

exports.validJWTNeeded = (req, res, next) => {
  if (req.headers['authorization']) {
    try {
      let authorization = req.headers['authorization'].split(' ')
      if (authorization[0] !== 'Bearer') {
        return res.status(401).send()
      } else {
        req.jwt = jwt.verify(authorization[1], public_key, verify_options)
        return next()
      }
    } catch (err) {
      return res.status(403).send();
    }
  } else {
    return res.status(401).send();
  }
}