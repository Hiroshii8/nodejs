const db = require('../../../database/database');

const RedisService = require('./redis');
// const PostgresService = require('./postgres/postgres');
// const MongoService = require('./mongo/mongo')

module.exports = {
    redis: RedisService.New(db.Database.redis),
    MongoService: null,
    PostgresService: null
}

//const Model = require('../../../database/mongoDB/model/model')
// Op is required for make operation in queries
//const { Sequelize, Op } = require('sequelize');
//const sequelize = new Sequelize('postgres://mixer:mixer@localhost:5432/practiceSequelize');
//const modelSequelize = require('../../../models');
