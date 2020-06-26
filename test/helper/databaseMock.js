const redis = require('./redisMock');
const postgreSeq = require('./sequelizeMock');

function initMockDB(mongoDB, redis, Sequelize){
    return {
        mongoDB,
        redis,
        Sequelize
    };
}
// wrap all database with object like DI
module.exports.Database = new initMockDB(null, redis.redis, postgreSeq);
