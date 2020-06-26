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
db.pets = require('../../models/pet.model')(sequelize, Sequelize);
db.owners = require('../../models/owner.model')(sequelize, Sequelize);

// relation
db.pets.belongsTo(db.owners); // 1 - 1
db.owners.hasMany(db.pets);   // 1 - *

module.exports = db;
