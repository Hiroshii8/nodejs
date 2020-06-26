const peopleService = require('../helper/service/init_people_service').peopleService;

require('mocha');
const chai = require('chai');

chai.should();

describe('People Service', () => {
    const name = "Heyooo";
    const resultExpect = {
        isSuccess: true,
        message: "Attendance for Heyooo was created !"
    };
    const resultAttend = {
        getAttendance: "ATTEND",
        msgResult: "Attendance already created"
    };
    const notAttendMessage = "Attendance was not created";
    it('Should return not attend!', async () => {
        const res = await peopleService.getEmployeeAttendanceByName(name);
        chai.expect(res).should.be.a('object');
        chai.expect(res.msgResult).to.be.equal(notAttendMessage);
    });

    it('Should return success attendance', async () => {
        const res = await peopleService.setEmployeeAttendance(name);
        chai.expect(res).should.be.a('object');
        chai.expect(res).to.deep.equal(resultExpect);
    });

    it('Should return attend!', async () => {
        const res = await peopleService.getEmployeeAttendanceByName(name);
        chai.expect(res).should.be.a('object');
        chai.expect(res).to.deep.equal(resultAttend);
    });
});
