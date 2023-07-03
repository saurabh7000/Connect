const { urlencoded } = require('express');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')

if(process.env.NODE_ENV !== "production") {
    
require("dotenv").config({path:"backend/config/config.env"});
}

//importing middleware
app.use(express.json({limit: '50mb'}))
app.use(urlencoded({limit: '50mb',extended:true}))
app.use(cookieParser())

//importing routes
const user = require('./routes/user')
const post = require('./routes/post')
 
 

 //Using routes
 app.use("/api/v1",user)
 app.use("/api/v1",post)

module.exports = app;

