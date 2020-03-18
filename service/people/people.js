// People Service will inject resouce from people

function PeopleService(resource) {

    async function setEmployeeAttendance(name){
       // set Attendance status
       let setAttendance = await resource.setAttendance(name).catch((err) => {return false});
       let msgResult = (setAttendance ? "Attendance for " + name + " was created !" : "Error set Attendance for " + name);
       return {
           isSuccess: setAttendance,
           message: msgResult
       }
   }

   async function getEmployeeAttendanceByName(name){
       // get empployee attendance
       let getAttendance, msgResult;
       getAttendance = await resource.getAttendanceByName(name).catch((err) => null);
       msgResult = (getAttendance == "" || getAttendance == null ? "Attendance was not created" : "Attendance already created");

       return {
           getAttendance : getAttendance,
           msgResult: msgResult
       }
   }
   return {
       setEmployeeAttendance: setEmployeeAttendance,
       getEmployeeAttendanceByName: getEmployeeAttendanceByName
   }
}

module.exports.Init = (resource) => PeopleService(resource);