var express = require('express');
var usersRoute = express();
// import controller
const usersController = require('../controllers/users.controller.js')
// create route
usersRoute.get('/',usersController.index);
usersRoute.get('/users',usersController.list);
usersRoute.post('/users',usersController.create);
usersRoute.get('/users/:id',usersController.read);
usersRoute.put('/users',usersController.update);
usersRoute.delete('/users/:id',usersController.delete);
usersRoute.get('/usersteams/:id',usersController.usersTeams);
usersRoute.get('/usersteams/',usersController.allUsersTeams);
// export routes
module.exports = usersRoute;