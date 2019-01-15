const RoleModel = require('../models/RoleModel')

exports.createRoleController = (req, res) => {

  const body= ({
    name: req.body.name,
    status: 1
  })

  RoleModel.createRoleModel(body)
  .then((result) => {
    console.log(result)
    res.status(200).json({
      message: "Created role successfully",
      role: {
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

exports.findByIdRoleController = (req, res) => {
  RoleModel.findByIdRoleModel(req.params.id_role)
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

exports.findAllRoleController = (req, res) => {
  RoleModel.findAllRoleModel()
  .then(docs => {
    const response = {
      count: docs.length,
      roles: docs.map(doc => {
        return {
          _id: doc._id,
          name: doc.name,
          status: doc.status,
          created: doc.created,
          modified: doc.modified
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

exports.patchByIdRoleController = (req, res) => {
  RoleModel.patchByIdRoleModel(req.params.id_role, req.body)
  .then((result) => {
    res.status(200).json({
      message: "Role updated",
      role: req.body
    })
  })
  .catch(err => {
    res.status(500).json({
      error: err
    })
  })
}

exports.deleteByIdRoleController = (req, res) => {
  RoleModel.deleteByIdRoleModel(req.params.id_role)
  .then((result)=> {
    res.status(200).json({
      message: "Role deleted",
      _id: req.params.id_role
    })
  })
  .catch(err => {
    res.status(500).json({
      error: err
    })
  })
}
