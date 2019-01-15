const fs = require('fs')
const UserModel = require('../models/UserModel')
const crypto = require('crypto')

exports.createUserController = (req, res) => {

  let salt = crypto.randomBytes(16).toString('base64')
  let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest("base64")

  const body= ({
    avatar: fs.readFileSync(req.file.path),
    name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password = salt + "$" + hash,
    age: req.body.age,
    gender: req.body.gender,
    phone: req.body.phone,
    permissionLevel: 1,
    status: 1
  })

  UserModel.createUserModel(body)
  .then((result) => {
    console.log(result)
    res.status(200).json({
      message: "Created user successfully",
      user: {
        _id: result._id
      }
    })
  })
  .catch(err => {
    console.log(err);
    res.status(400).json({
      result: err,
      code: 400
    })
  })

}

exports.findByIdUserController = (req, res) => {
  UserModel.findByIdUserModel(req.params.userId)
  .then((result) => {
    if (result) {
      res.status(200).json(result)
    } else {
      res
      .status(404)
      .json({
        message: "No valid entry found for provided ID"
      })
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
}

exports.findAllUserController = (req, res) => {
  UserModel.findAllUserModel()
  .then(docs => {
    const response = {
      count: docs.length,
      users: docs.map(doc => {
        return {
          _id: doc._id,
          name: doc.name,
          lastname: doc.lastname,
          email: doc.email,
          age: doc.age,
          gender: doc.gender,
          phone: doc.phone,
          permissionLevel: doc.permissionLevel,
          created: doc.created,
          modified: doc.modified,
          status: doc.status,
        }
      })
    }
    if (docs.length > 0) {
      res.status(200).json(response)
    } else {
      res.status(404).json({
        message: 'No entries found'
    })
    }
  })
  .catch(err => {
    res.status(500).json({
      error: err
    })
  })
}

exports.patchByIdUserController = (req, res) => {
  if (req.body.password) {
    let salt = crypto.randomBytes(16).toString('base64')
    let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest("base64")
    req.body.password = salt + "$" + hash
  }
  UserModel.patchByIdUserModel(req.params.userId, req.body)
  .then((result) => {
    res.status(200).json({
      message: "User updated",
      user: req.body
    })
  })
  .catch(err => {
    res.status(500).json({
      error: err
    })
  })
}

exports.removeByIdUserController = (req, res) => {
  UserModel.removeByIdUserModel(req.params.userId)
  .then((result)=> {
    res.status(200).json({
      message: "User deleted",
      _id: req.params.userId
    })
  })
  .catch(err => {
    res.status(500).json({
      error: err
    })
  })
}
