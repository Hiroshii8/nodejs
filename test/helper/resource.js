const peopleResource = require('../../resource/people/people');
const redisMock = require('./redis');
function InitPeopleResource() {
    return new peopleResource.InitResource(redisMock, null, null);
}

module.exports = {
    InitPeopleResource
}