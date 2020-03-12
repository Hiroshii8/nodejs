

module.exports.handlerRedis = (redisClient) => {
    getKey: async (req, res) => {
        let result = await redisClient.getAsync("klik");
        res.json(result);
    },
}
