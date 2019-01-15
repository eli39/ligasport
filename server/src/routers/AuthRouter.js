const VerifyUserMiddleware = require('../middlewares/Verify')
const AuthorizationController = require('../controllers/AuthController')
const AuthValidationMiddleware = require('../middlewares/Validation')

exports.routesConfig = function (app) {
  app.post('/api/auth', [
    VerifyUserMiddleware.hasAuthValidFields,
    VerifyUserMiddleware.isPasswordAndUserMatch,
    AuthorizationController.login
  ])
  app.post('/api/auth/refresh', [
    AuthValidationMiddleware.validJWTNeeded,
    AuthValidationMiddleware.verifyRefreshBodyField,
    AuthValidationMiddleware.validRefreshNeeded,
    AuthorizationController.login
  ])
}
