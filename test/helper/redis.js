const redis = require('redis-mock');
const Promise = require('bluebird');

module.exports.initRedisMock = () => {
    const redisClient = redis.createClient({
        host:'127.0.0.1',
        port:6379
    });
    return Promise.promisifyAll(redisClient);
}
