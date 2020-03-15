var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();
var chaiRequest = require('chai-http');
var chai = require('chai');
var {InitPeopleResource} = require('./helper/resource');
chai.use(chaiRequest);
var nock = require('nock');
var app = require('./helper/dummyServer');
var supertest = require('supertest');
var request =  function () {
    return supertest(app);
}

describe('This is for test only', (done) => {
    it('Test Redis Mock', function () {
        const result = nock('http://localhost:8888').post('/redis-get', {
            key: "ANDI"
        }).reply(200, {
            getAttendance: "ATTEND",
            msgResult : "Attendance already created"
        });

        request(app).get('/redis-get').send({
            key: "ANDI"
        }).set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .end(function(err, res) {
            result.done();
            assert(res.body.getAttendance, null);
            done();
        });
    })
})
