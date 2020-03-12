var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();
var chaiNock = require('chai-nock');
var chai = require('chai');
var helper = require('./helper/helper');
chai.use(chaiNock);


describe('This is for test only', () => {
    it('Test mock', function () {
        let isValid = 123;
        assert.equal(isValid,123, 'result is 123')
    })
})
