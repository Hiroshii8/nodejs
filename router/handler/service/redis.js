// this is implementation of depedency injection in node js
class RedisService {
    constructor(redis){
        this.redis = redis;
    }

    // getValueByKey is a wrapper for async redis GET
    async getValueByKey (key) {
        let result = await this.redis.GET(key);
        return result;
    }

    // setValue is a wrapper for async redis SET
    async setValue (key, value) {
        let result = await this.redis.SET(key, value);
        return result;
    }

    // increment is a wrapper for async redis INCR
    async increment(key) {
        let result = await this.redis.INCR(key);
        return result;
    }

    // add your logic here
}

function initRedisService(redisClient){
    return new RedisService(redisClient);
}

//
module.exports.New = (redisClient) => initRedisService(redisClient);
