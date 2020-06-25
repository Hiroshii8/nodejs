const redis = require('./Redis/redis');
const postgreSeq = require('./Sequelize/sequelize');

function createDatabase(mongoDB, redis, Sequelize){
    return {
        mongoDB,
        redis,
        Sequelize
    };
}
// wrap all database with object like DI
module.exports.Database = new createDatabase(null, redis.redis, postgreSeq);
