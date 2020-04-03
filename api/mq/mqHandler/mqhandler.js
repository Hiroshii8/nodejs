const db = require('../../../database/database').Database;
const PeopleResource = require('./resource/people/people').PR(db.redis);
const PeopleService = require('./service/people/people').Init(PeopleResource);
const Handler = require('../../http/handler/handler').Init(PeopleService);
