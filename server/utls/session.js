const jwt = require("jsonwebtoken")

module.exports = {
    generateToken: function(user) {
        jwt.sign({ id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24})
    }
}