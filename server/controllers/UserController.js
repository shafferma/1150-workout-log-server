const DB = require("../db")
const User = DB.import("../model/user")
const Session = require("../utls/session")
const Password = require("../utls/password")

module.exports = {
    register: function(request, response) {
        console.log('register 1')
        // we wrap our code in a try/catch incase the request doesn't contain a user object
        try {
            const {username, password} = request.body.user
            //user did not provide their username and password
            if (!username || !password) {
                console.log('register 2')
                response.send(400, "Provide username and password")
            }

            console.log('register 3')
            User.create({
                username: username,
                passwordhash: Password.hash(password)
            }).then((user) => {
                // generate a session token using the newly created user object
                const token = Session.generateToken(user)

                console.log('register 4')
                
                // respond to the request with the following info
                response.send({
                    user: user,
                    message: "Account registered",
                    sessionToken: token
                })
            })

        } catch(error) {
            console.log('register 5')
            response.send(500, "Error")
        }
    }
}