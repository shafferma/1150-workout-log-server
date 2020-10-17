// retrieve Enviornment variables from our ".env" file
require("dotenv").config();

// import the "express " framework for creating our server
const express = require("express")

// create our server application
const app = express();

//import our database 
const database = require("./db")

// initilize database
database.authenticate()
    // after initilzations    
    .then(() => {
        console.log(`Connected to the ${process.env.DB_NAME} database.`)
        database.sync()
    })

// middleware: tells our application to parse requsts as JSON
app.use(express.json());
//tells our application what "request headers" are allowed
app.use(require("./middleware/headers"));

// our server application is running
app.listen(process.env.DB_PORT, function() {
    console.log(`Application running on ${process.env.DB_HOST}:${process.env.DB_PORT}`)
})