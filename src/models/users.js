// create model 
//import sequelize
var Sequelize = require('sequelize');
// importing connection database
var sequelize = require('../db/db.js');
var Teams = require('./teams.js');

var Users = sequelize.define(  'users',{ 
    id: {type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true },
    firstname:{type: Sequelize.STRING},
    lastname:{type: Sequelize.STRING},
    email:{type: Sequelize.STRING},
    pass:{type: Sequelize.STRING},
    teamId: {type: Sequelize.INTEGER}
});
Users.belongsTo(Teams)

/* el método define() recibe como primer parámetro el nombre de la base de datos, 
como segundo parámetro un objeto donde ponemos los atributos de nuestra tabla, donde 
podemos especificar que tipo de dato va representar este campo.*/

module.exports=Users;