/***
const DB = require("../db")
const User = DB.import("../model/user")
const Session = require("../utls/session")
const Password = require("../utls/password")

 */

module.exports = {
    login: function(request, response){
        console.log("login")
        response.send("logged in")

        /**
         *  try { bcrypt.compare()
            const {username, password} = request.body.user
            //user did not provide their username and password
            if (user) {
                response.send(400, "Provide username and password")
            }

            User.findOne({
                username: username,
                passwordhash: Password.hash(password)
            }).then((user) => {
                // generate a session token using the newly created user object
                const token = Session.generateToken(user)

                
                // respond to the request with the following info
                response.send({
                    user: user,
                    message: "Account registered",
                    sessionToken: token
                })
            })

        } catch(error) {
            response.send(500, "Error")
        }
         */
    }
}