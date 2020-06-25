const promise = require('bluebird');
const redis = require('redis-mock');
const redisClient = new redis.createClient();
promise.promisifyAll(redisClient);


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
        try {
            await redisClient.set(key, value);
            return true;
        } catch (err) {
            return false;
        }
    },
    INCR: async (key) => {
        return (await redisClient.incr(key) ? true : false);
    },
    REDIS: redisClient,
}
