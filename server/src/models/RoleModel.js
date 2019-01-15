const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roleSchema = new Schema({
  name: String,
  status: Number,
  created: { type: 'Date', default: Date.now },
  modified: { type: 'Date', default: Date.now }
})

const Role = mongoose.model('Roles', roleSchema)

exports.createRoleModel = (dataRole) => {
  const role = new Role(dataRole)
  return role.save()
}

exports.findByIdRoleModel = (id_role) => {
  return Role.findById(id_role)
  .then((result) => {
    result = JSON.stringify(result)
    return JSON.parse(result)
  })
}

exports.findAllRoleModel = () => {
  return Role.find()
  .then((result) => {
    result = JSON.stringify(result)
    return JSON.parse(result)
  })
}

exports.patchByIdRoleModel = (id_role, dataRole) => {
  return new Promise((resolve, reject) => {
    Role.findById(id_role, function (err, role) {
      if (err) reject(err);
      for (let i in dataRole) {
        role[i] = dataRole[i]
      }
      role.save(function (err, updatedRole) {
        if (err) return reject(err)
        resolve(updatedRole)
      })
    })
  })
}

exports.deleteByIdRoleModel = (id_role) => {
  return new Promise((resolve, reject) => {
    Role.deleteOne({_id: id_role}, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve(err)
      }
    })
  })
}
