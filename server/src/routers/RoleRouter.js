const RoleController = require('../controllers/RoleController')
const PermissionMiddleware = require('../middlewares/Permission')
const ValidationMiddleware = require('../middlewares/Validation')

const config = require('../config/dev')

const ADMIN = config.permissionLevels.ADMIN
const PAID = config.permissionLevels.PAID_USER
const FREE = config.permissionLevels.NORMAL_USER

exports.routesConfig = function (app) {

  app.post('/api/role', [
    RoleController.createRoleController
  ])

  app.get('/api/role/:id_role', [
    RoleController.findByIdRoleController
  ])

  app.get('/api/role', [
    RoleController.findAllRoleController
  ])
  app.patch('/api/role/:id_role', [
    RoleController.patchByIdRoleController
  ])
  app.delete('/api/role/:id_role', [
    RoleController.deleteByIdRoleController
  ])

}
