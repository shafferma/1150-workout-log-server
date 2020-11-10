const DB = require("../db")
const Log = DB.import("../models/log");


// handles our "Log logic"
module.exports = {
    // Returns a list of logs belonging to the requesting user
    getLogs: function(request, response) {
        try {
            Log.findAll({
                where:{ owner_id: request.user.id}
            }).then((logs) => {
                console.log("Logs found for user")
                response.status(200).send({
                    data: logs,
                    message: "Logs Found"
                })
            }).catch((error) => {
                response.status(400).send({
                    message: "Error finding logs",
                    error: error
                })
            })
        } catch(error) {
            console.log("getLogs error", error)
            response.status(500).send({ error })
        }
    },

       // create a log in our database
    create: function(request, response) {
        try {
            console.log('success create', request.body)

            Log.create({
                description: request.body.description,
                definition: request.body.definition,
                result: request.body.result,
                owner_id: request.user.id,
            }).then((log) => {
                console.log('Log created', { id: log.id })
                response.status(200).send({
                    data: log,
                    message: "Log Created"
                })
            }).catch((error) => {
                console.log('Log creation error', { error })
                response.status(400).send({
                    message: "Error creating Log",
                    error: error
                })
            })

        } catch(error) {
            console.log("create error", error)
            response.status(500).send({ error })
        }
    },

    // get id
    getById: function(request, response) {
        try {
            Log.findOne({
                where:{ id: request.params.id, owner_id: request.user.id}
            }).then((log) => {

                if (!log) throw "Log not found"

                console.log("Log Found")
                response.status(200).send({
                    data: log,
                    message: "Log Found"
                })
            }).catch((error) => {
                response.status(400).send({
                    message: "Error finding log",
                    error: error
                })
            })

        } catch(error) {
            console.log("getById error", error)
            response.status(500).send({ error })
        }
    },

    // update Log by its id
    updateById: function(request, response) {
        try {
            // get the updated value by creating a copy of the object
            const body = { ...request.body} 
            // dont allow the request to change the owner
            if(body["owner_id"]) {
                delete body["owner_id"]
            }
            //update our log
            Log.update({
                ...request.body
            }, { 
                where:{ id: request.params.id, owner_id: request.user.id}
            })
            
            .then(([logId]) => {

                if (!logId) throw "Log not found"


                // use the logId and body to make our log 
                // object and return to the client
                const log = {
                    id: logId,
                    ...body
                }
                console.log("Log Updated", { id: logId, ...body})
                response.status(200).send({
                    data: log,
                    message: "Log updated"
                })
            }).catch((error) => {
                console.log("updateById error", error)
                response.status(400).send({
                    message: "Error updating log",
                    error: error
                })
            })
        } catch(error) {
            console.log("updateById error", error)
            response.status(500).send({ error })
        }
    }, 

    // delete a log by id
    deleteById: function(request, response) {
        try {
            //delete log
            Log.destroy({
                where:{ id: request.params.id, owner_id: request.user.id}
            }).then((logId) => {

                if (!logId) throw "Log not found"

                console.log("Log Deleted", { logId})
                response.status(200).send({
                    data: logId,
                    message: "Log Deleted"
                })
            }).catch((error) => {
                response.status(400).send({
                    message: "Error deleting log",
                    error: error
                })
            })

        } catch(error) {
            console.log("deleteById error", error)
            response.status(500).send({ error })
        }
    },
}