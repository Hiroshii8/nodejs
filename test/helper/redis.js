const promise = require('bluebird');
const redis = require('redis-mock');
redisClient = redis.createClient()
promise.promisifyAll(redisClient)

console.log("Redis - Mock");
// redis WRAPPER 
module.exports.redis = {
    GET: async (key) => {
        return redisClient.getAsync(key).then((res) => {
            return res;
        }).catch((err) => {
            return null;
        });
    },
    SET: async (key, value) => {
        return (await redisClient.set(key, value) ? true : false);
    },
    INCR: async (key) => {
        return (await redisClient.incr(key) ? true : false);
    }
}
