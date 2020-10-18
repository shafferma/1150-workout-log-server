const DB = require("../db")
const Log = DB.import("../model/log");


// handles our "Log logic"
module.exports = {
    getLogs: function(request, response) {
        try {
            console.log('success getLogs', request.user.username, request.user.id)
            response.status(200).send("success getLogs")
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
                owner_id: request.body.owner_id,
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
    getById: function(request, response) {
        try {
            console.log('success getById', request.params)
            response.status(200).send("success getById")
        } catch(error) {
            console.log("getById error", error)
            response.status(500).send({ error })
        }
    },
    updateById: function(request, response) {
        try {
            console.log('success updateById', request.params)
            response.status(200).send("success updateById")
        } catch(error) {
            console.log("updateById error", error)
            response.status(500).send({ error })
        }
    },
    deleteById: function(request, response) {
        try {
            console.log('success deleteById', request.params)
            response.status(200).send("success deleteById")
        } catch(error) {
            console.log("deleteById error", error)
            response.status(500).send({ error })
        }
    },
}