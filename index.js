//Server generated
const express = require('express');
var Sequelize = require('sequelize');

var Users =require('./src/models/users.js');
var Teams =require('./src/models/teams.js');

var app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//routes 
const usersRoute = require('./src/routes/users.routes.js');
app.use('/', usersRoute);
const teamsRoute= require('./src/routes/teams.routes.js');
app.use('/',teamsRoute);


var Port = process.env.PORT || 3000;
var IP = process.env.IP || '127.0.0.1';
app.listen(Port, IP, (err) => {
    if (err) {
       console.log(err)
   } else {
       console.log(`Server running at http://${IP}:${Port}/`);
    }
});