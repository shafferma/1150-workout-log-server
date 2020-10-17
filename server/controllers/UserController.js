const User = require("../model/user")

module.exports = {
    register: function(request, response) {
        
        // User.create()
        
        console.log(request)
        response.send("registered whoo")
    }
}