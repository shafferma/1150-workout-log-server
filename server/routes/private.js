const LogController = require("../controllers/LogController")

module.exports = function(router) {

    // get list of logs
    router.get("/log", LogController.getLogs)

    // create a log
    router.post('/log', LogController.create)

    // get a log by ID
    router.get("/log/:id", LogController.getById)

    // update a log by its ID
    router.put("/log/:id", LogController.updateById)

    // delete a log by its ID
    router.delete("/log/:id", LogController.deleteById)

    return router
}
