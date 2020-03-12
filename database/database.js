// const mongoDB = require('./mongoDB/mongo');
const redis = require('./redis');
// const postgre = require('./postgre');
// db.Database.mongoDB.Promise = global.Promise;

function createDatabase(mongoDB, redis, postgreDB){
    return {
        mongoDB,
        redis,
        postgreDB
    };
}
// wrap all database with object like DI
module.exports.Database = createDatabase(null, redis.redis, null);
