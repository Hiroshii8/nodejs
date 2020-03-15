const bodyParser = require('body-parser');

module.exports = (handler, app) => { 
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

    app.get('/redis-get', handler.getEmployeeAttendance)
    app.post('/redis-set', handler.setEmployeeAttendance);
}
