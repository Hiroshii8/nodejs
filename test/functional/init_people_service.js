const redisMock =  require('../helper/redisMock').redis;
const PeopleService = require('../../service/people');
const PeopleResource = require('../../resource/people');
const peopleResource = PeopleResource.Init(redisMock);
const peopleService = PeopleService.Init(peopleResource);

module.exports.peopleService = peopleService;
