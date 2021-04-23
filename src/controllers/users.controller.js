//import sequelize
var Sequelize = require('sequelize');
const route = require('../routes/users.routes.js');
// import models
var Users = require('../models/users.js');
var Teams =require('../models/teams.js');
const usersController={};

usersController.index=(req, res) => {
    return res.send('<h2>Welcome to Express App<h2>');
}

usersController.list = (req, res) => {
    Users.findAll({ attributes: ['id','firstname', 'lastname', 'email', 'pass','teamId'] })
    .then(users => res.json(users))
    .catch(error =>  res.status(412).json({msg: error.message}));
}

usersController.create = (req, res) => {
    Users.create({
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    pass:req.body.pass,
                    teamId:req.body.teamId
                })
        .then(users=>res.json(users))
        .catch(error=>res.status(400).send('Error in insert new record'));
}


usersController.read = (req, res) => {
    let idUser=parseInt(req.params.id);
    Users.findByPk(idUser, {attributes: ['id','firstname', 'lastname', 'email', 'pass','teamId'] })
    .then(users => res.json(users))
    .catch(error => {
      res.status(412).json({msg: error.message});
    });
}

usersController.update = (req, res) => {
    Users.findByPk(req.body.id)
    .then(users=>{users.update({
                                firstname: req.body.firstname,
                                lastname: req.body.lastname,
                                email: req.body.email,
                                pass:req.body.pass,
                                teamId:req.body.teamId
                            })
                        .then(users => res.json(users));})
    .catch(error =>res.status(412).json({msg: error.message}));
}
usersController.delete = (req, res) => {
    Users.destroy({where: {id: req.params.id}})
    .then(result => res.sendStatus(204))
    .catch(error => res.status(412).json({msg: error.message}));
}

usersController.usersTeams= (req, res) => {
    let idUser=parseInt(req.params.id);
    Users.findAll({
        attributes: ['id','firstname', 'lastname'],
        where: { id:idUser},
        include: [
            {
            model: Teams,
            attributes: ['id','name']
            },
        ]
        }).then(users => res.json(users))
        .catch(error => res.status(412).json({msg: error.message}));
    }

usersController.allUsersTeams= (req, res) => {
    let idUser=parseInt(req.params.id);
    Users.findAll({
        attributes: ['id','firstname', 'lastname'],
        include: [
            {
            model: Teams,
            attributes: ['id','name']
            },
        ]
        }).then(users => res.json(users))
        .catch(error => res.status(412).json({msg: error.message}));
    }
module.exports=usersController;

