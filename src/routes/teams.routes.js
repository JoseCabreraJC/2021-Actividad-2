var express = require('express');
var teamsRoute = express();
// import controller
const teamsController = require('../controllers/teams.controller.js')
// create route
teamsRoute.get('/teams',teamsController.list);
teamsRoute.post('/teams',teamsController.create);
teamsRoute.get('/teams/:id',teamsController.read);
teamsRoute.put('/teams',teamsController.update);
teamsRoute.delete('/teams/:id',teamsController.delete);

// export routes
module.exports = teamsRoute;