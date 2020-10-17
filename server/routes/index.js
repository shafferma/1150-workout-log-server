module.exports = function(router) {
    router.post("/user/register")
    router.post("/user/login")
    router.post("/log")
    router.get("/log", function (request, response){
        console.log("::GET:: /log")
        response.send("beep boop")
    })
    router.get("/log/:id")
    router.put("/log/:id")
    router.delete("/log/:id")
    return router
}
