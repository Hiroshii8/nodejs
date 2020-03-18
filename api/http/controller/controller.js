const Owner = require('./owner.sequelize');
const Pet = require('./pet.sequelize');
//const Tutorial = require('./tutorial.sequelize');

module.exports.Controller = (app, database) => {
    Owner(app, database);
    Pet(app, database);
};