const bodyParser = require('body-parser');
// const tutorials = require('./tutorial.router');
// const owner = require('./owner.router');
// const pet = require('./pet.router');

module.exports = (handler, app) => {
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json());
    // Redis API
    app.get('/redis-get', handler.getEmployeeAttendance);
    app.post('/redis-set', handler.setEmployeeAttendance);

};
