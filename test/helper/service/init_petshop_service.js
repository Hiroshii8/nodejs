const database = require('../databaseMock').Database;
const resource = require('../../../resource/petshop');
const service = require('../../../service/petshop');

const petShopResource = resource.Init(database.redis, database.Sequelize, database.mongoDB);
const petShopService = service.Init(petShopResource);

module.exports.petShopService = petShopService;
