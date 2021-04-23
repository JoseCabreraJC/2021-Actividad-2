//import sequelize
var Sequelize = require('sequelize');
const route = require('../routes/teams.routes.js');
// import model
var Teams = require('../models/teams.js');
const teamsController={};


teamsController.list = (req, res) => {
    Teams.findAll({ attributes: ['id','name']})
    .then(teams => res.json(teams))
    .catch(error =>res.status(412).json({msg: error.message}));
  
}

teamsController.create = (req, res) => {
    Teams.create({name: req.body.name})
        .then(teams=>res.json(teams))
        .catch(error=>res.status(400).send('Error in insert new record'));
}


teamsController.read = (req, res) => {
    let idTeam=parseInt(req.params.id);
    Teams.findByPk(idTeam, {attributes: ['id','name'] })
    .then(teams => res.json(teams))
    .catch(error => res.status(412).json({msg: error.message}));
}

teamsController.update = (req, res) => {
    Teams.findByPk(req.body.id)
    .then(teams=>{teams.update({name: req.body.name})
                        .then(teams => res.json(teams));})
    .catch(error =>res.status(412).json({msg: error.message}));
}
teamsController.delete = (req, res) => {
    Teams.destroy({where: {id: req.params.id}})
    .then(result => res.sendStatus(204))
    .catch(error => res.status(412).json({msg: error.message}));
}


module.exports=teamsController;