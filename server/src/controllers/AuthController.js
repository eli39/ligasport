'use strict'

const fs   = require('fs')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const config = require('../config/dev')

const secret = config.secret
const sign_options = config.options
const private_key  = fs.readFileSync('C:/Users/alvar/Documents/ligasport/server/src/config/private.key', 'utf8')

exports.login = (req, res) => {
  try {
    let refreshId = req.body.userId + secret
    let salt = crypto.randomBytes(16).toString('base64')
    let hash = crypto.createHmac('sha512', salt).update(refreshId).digest("base64")
    req.body.refreshKey = salt
    let token = jwt.sign(req.body, private_key, sign_options)
    let b = new Buffer(hash)
    let refresh_token = b.toString('base64')
    res.status(200).send({
      token_rsa_refresh: refresh_token,
      token_rsa: 'Bearer ' + token,
      id_user: req.body.userId 
    })
  } catch (err) {
    res.status(500).send({errors: err})
  }
}

exports.refresh_token = (req, res) => {
  try {
    req.body = req.jwt
    let token = jwt.sign(req.body, private_key, sign_options)
    res.status(200).send({id: token})
  } catch (err) {
    res.status(500).send({errors: err})
  }
}
