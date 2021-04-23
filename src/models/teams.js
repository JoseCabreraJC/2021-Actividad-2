// create model 
//import sequelize
var Sequelize = require('sequelize');
// importing connection database
var sequelize = require('../db/db.js');

var Teams = sequelize.define(  'teams',{ 
    id: {type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true },
    name:{type: Sequelize.STRING},
});


/* el método define() recibe como primer parámetro el nombre de la base de datos, 
como segundo parámetro un objeto donde ponemos los atributos de nuestra tabla, donde 
podemos especificar que tipo de dato va representar este campo.*/

module.exports=Teams;