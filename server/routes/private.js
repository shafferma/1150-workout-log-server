const UserController = require("../controllers/UserController")
const AuthController = require("../controllers/AuthController")
const LogController = require("../controllers/LogController")

module.exports = function(router) {
    // router.post("/log")
    router.get("/log", LogController.getLogs)
    // router.get("/log/:id")
    // router.put("/log/:id")
    // router.delete("/log/:id")
    return router
}
