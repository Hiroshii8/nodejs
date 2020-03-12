const promise = require('bluebird');
const redis = require('redis');

promise.promisifyAll(redis.createClient())

module.exports = {
    get: async (key) => {
        return await redis.getAsync(key)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return null;
            });
    },
    set: async (key, value) => {
        return await redis.set(key, value)
            .then(() => {
                return true
            })
            .catch((err) => {
                return false;
        });
    },
    incr: async (key) => {
        return await redis.incr(key).then(() => {
            return true;
        }).catch((err) => {
            console.log(err);
            return false;
        });
    }
}
