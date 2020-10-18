const UserController = require("../controllers/UserController")
const AuthController = require("../controllers/AuthController")

module.exports = function(router) {
    router.post("/user/register", UserController.register)
    router.post("/user/login", AuthController.login)
    return router
}
