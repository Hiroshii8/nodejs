const redis = require('./Redis/redis');
const postgreSeq = require('./Sequelize/sequelize');

function createDatabase(mongoDB, redis, Sequelize, postgre){
    return {
        mongoDB,
        redis,
        Sequelize,
        postgre,
    };
}
// wrap all database with object like DI
module.exports.Database = new createDatabase(null, redis.redis, postgreSeq, null);
