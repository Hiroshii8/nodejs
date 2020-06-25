const express = require('express');
import server from './server';

const app = express();

// router for express JS
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', server);

console.log("Start Server")
app.listen(8081);

module.exports = app;
