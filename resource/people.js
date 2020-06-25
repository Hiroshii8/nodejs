// PeopleResource will be injected to Service
// this is example for using prototype without class
function PeopleResource(redis) {
    async function getAttendanceByName(name) {
        return await redis.GET(name).then((res) => res).catch((err) => null);
    }
    async function setAttendance(name) {
        return await redis.SET(name, "ATTEND").then((res) => res).catch((err) => null);;
    }
    return {
        getAttendanceByName: getAttendanceByName,
        setAttendance: setAttendance
    }
}

module.exports.Init = (redis) => PeopleResource(redis);
