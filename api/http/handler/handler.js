// inject people service

function Handler(PeopleService) {
    async function getEmployeeAttendance(req, res) {
        console.log("GET - REDIS");
        let result = await PeopleService.getEmployeeAttendanceByName(req.body.key);
        return res.json(result);
    }
    async function setEmployeeAttendance(req, res) {
        console.log("SET - REDIS");
        let result = await PeopleService.setEmployeeAttendance(req.body.key);
        return res.json(result);
    }
    return {
        getEmployeeAttendance,
        setEmployeeAttendance
    }
}

module.exports.Init = (PeopleService) => Handler(PeopleService);