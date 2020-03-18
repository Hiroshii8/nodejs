const dbConfig = require('../../config/db.config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// models
// db.tutorials = require('../../model/tutorial.model.js')(sequelize, Sequelize);
db.pets = require('../../model/pet.model')(sequelize, Sequelize);
db.owners = require('../../model/owner.model')(sequelize, Sequelize);

// relation
db.pets.belongsTo(db.owners); // 1 - 1
db.owners.hasMany(db.pets);   // 1 - *

module.exports = db;