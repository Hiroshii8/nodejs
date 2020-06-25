function peopleHandler(PeopleService) {

    // setEmployeeAttendance will get attendance data from employee  name
    async function getEmployeeAttendance(req, res) {
        console.log("GET - REDIS");
        let result = await PeopleService.getEmployeeAttendanceByName(req.body.name);
        return res.json(result);
    }

    // setEmployeeAttendance will set data attendance for the employee
    async function setEmployeeAttendance(req, res) {
        console.log("SET - REDIS");
        let result = await PeopleService.setEmployeeAttendance(req.body.name);
        return res.json(result);
    }

    return {
        getEmployeeAttendance,
        setEmployeeAttendance,
    }
}

module.exports.Init = (service) => peopleHandler(service);
