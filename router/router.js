const handler = require('./handler/handler');

module.exports = (app) => {
    app.get('/redis-get', handler.redisGet);
    app.post('/redis-incr', handler.redisIncr);
    app.post('/redis-set', handler.redisSet);
    app.get('/mongoDB', handler.mongoFindBiodata);
    app.post('/mongoDB', handler.mongoCreateBiodata);
    app.get('/psql-seq', handler.findAllProduct);
    app.post('/psql-seq', handler.createProduct);
}
