const jwt = require("jsonwebtoken")

module.exports = {
    // generates a token we can give to the User for handling authentication
    generateToken: function(user) {
        return jwt.sign({ id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24})
    } 
}