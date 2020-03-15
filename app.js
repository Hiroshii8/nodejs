const express = require('express');
const handler = require('./api/http/handler/handler');
const route = require('./api/http/route');
const database = require('./database/database').Database;
const PeopleResource = require('./resource/people/people');
const PeopleService = require('./service/people/people');
const app = express()
// initialize resource based on used database
const pr = PeopleResource.PR(database.redis, null, null);
const PS = PeopleService.Init(pr);
const Handler = handler.Init(PS);

// router for express JS
route(Handler, app);


console.log("Start Server")
app.listen(8081);

module.exports = app;