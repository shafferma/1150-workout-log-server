module.exports = {
    login: function(request, response){
        console.log("login")
        response.send("logged in")
    }
}