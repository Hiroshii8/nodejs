// inject people service

function Handler(PeopleServiceInject) {
    async function getEmployeeAttendance(req, res) {
        console.log("GET - REDIS");
        let result = await PeopleServiceInject.getEmployeeAttendanceByName(req.body.key);
        return res.json(result);
    }
    async function setEmployeeAttendance(req, res) {
        console.log("SET - REDIS");
        let result = await PeopleServiceInject.setEmployeeAttendance(req.body.key);
        return res.json(result);
    }
    return {
        getEmployeeAttendance,
        setEmployeeAttendance
    }
}

module.exports.Init = (PeopleServiceInject) => Handler(PeopleServiceInject);