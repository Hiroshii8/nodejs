const express = require('express');
const handler = require('./api/http/handler/handler');
const route = require('./api/http/route');
const database = require('./database/database').Database;
const PeopleResource = require('./resource/people/people');
const PeopleService = require('./service/people/people');
const app = express()

const Controller = require('./api/http/controller/controller').Controller;

// initialize resource based on used database
const peopleResource = PeopleResource.PR(database.redis, null, null);
const peopleService = PeopleService.Init(peopleResource);
const Handler = handler.Init(peopleService);

// router for express JS
route(Handler, app);

// router for sequelize
Controller(app, database.postgreSequelize);


// sync database sequelize
database.Sequelize.sequelize.sync();

console.log("Start Server")
app.listen(8081);

module.exports = app;