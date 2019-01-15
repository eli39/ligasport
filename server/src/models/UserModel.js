const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  avatar: Buffer,
  name: String,
  lastname: String,
  email: String,
  password: String,
  age: Number,
  gender: String,
  phone: String,
  permissionLevel: Number,
  status: Number,
  created: { type: 'Date', default: Date.now },
  modified: { type: 'Date', default: Date.now }
})

const User = mongoose.model('Users', userSchema)

exports.findByEmail = (email) => {
  return User.find({email: email})
}

exports.createUserModel = (dataUser) => {
  const user = new User(dataUser)
  return user.save()
}

exports.findByIdUserModel = (userId) => {
  return User.findById(userId)
  .then((result) => {
    result = JSON.stringify(result)
    return JSON.parse(result)
  })
}

exports.findAllUserModel = () => {
  return User.find()
  .then((result) => {
    result = JSON.stringify(result)
    return JSON.parse(result)
  })
}

//WITH PROMISE
exports.patchByIdUserModel = (userId, dataUser) => {
  return new Promise((resolve, reject) => {
    User.findById(userId, function (err, user) {
      if (err) reject(err);
      for (let i in dataUser) {
        user[i] = dataUser[i]
      }
      user.save(function (err, updatedUser) {
        if (err) return reject(err)
        resolve(updatedUser)
      })
    })
  })
}

exports.removeByIdUserModel = (userId) => {
  return new Promise((resolve, reject) => {
    User.deleteOne({_id: userId}, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve(err)
      }
    })
  })
}
