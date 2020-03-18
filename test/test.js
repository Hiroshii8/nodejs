var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();
var chai = require('chai');
var {InitPeopleResource} = require('./helper/resource');
var nock = require('nock');
var app = require('./helper/dummyServer');
var supertest = require('supertest');
var request =  function () {
    return supertest(app);
}

describe('This is for test only', (done) => {
    beforeEach(() => {
        nock('http://localhost:8888').get('/redis-get', {
            key: "ANDI"
        })
        .reply(200, {
            getAttendance: "ATTEND",
            msgResult : "Attendance already created"
        });
    })
    
    it('Test Redis Mock', function () {
        request(app).get('/redis-get').send({
            key: "ANDI"
        }).set('Accept', 'application/json')
        .end((err,res) => {
            expect(res.body.getAttendance).should.be.equal(null);
            done();
        });
    })
})
