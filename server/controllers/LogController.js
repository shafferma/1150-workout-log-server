
// handles our "Log logic"
module.exports = {
    getLogs: function(request, response) {
        console.log("::GET:: /log")
        console.log('get our Logs')
        console.log(request.user)
        response.send("beep boop")
    }
}