const express = require('express');
const handler = require('../../api/http/handler/handler');
const route = require('../../api/http/route');
const database = require('./database').Database;
const PeopleResource = require('../../resource/people/people');
const PeopleService = require('../../service/people/people');
const app = express()
// MOCK Server
// initialize resource based on used database
const PR = PeopleResource.PR(database.redis, null, null);
// inject PeopleResource to PeopleService
const PS = PeopleService.Init(PR);

const Handler = handler.Init(PS);

// router for express JS
route(Handler, app);

console.log("Start Server")
app.listen(8888)

module.exports = app;