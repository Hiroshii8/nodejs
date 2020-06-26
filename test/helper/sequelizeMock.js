const sequelizeMock = require('sequelize-mock');
//
const sequelizeConnection = new sequelizeMock();

const db = {}
db.Sequelize = sequelizeMock;
db.sequelize = sequelizeConnection;

// models
db.pets = require('../../models/pet.model')(sequelizeConnection, sequelizeMock);
db.owners = require('../../models/owner.model')(sequelizeConnection, sequelizeMock);

// relation
db.pets.belongsTo(db.owners); // 1 - 1
db.owners.hasMany(db.pets);   // 1 - *

// relation
db.pets.belongsTo(db.owners); // 1 - 1
db.owners.hasMany(db.pets);   // 1 - *

module.exports = db;
