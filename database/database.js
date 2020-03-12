const mongoDB = require('./mongoDB/mongo');
const redis = require('./redis');
const postgre = require('./postgre');

function createDatabase(mongoDB, redis, postgreDB){
    return {
        mongoDB,
        redis,
        postgreDB
    };
}

// wrap all database with object like DI
module.exports.Database = createDatabase(mongoDB.mongoDB, redis, null);
