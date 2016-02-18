'use strict';

var chai = require('chai');
var expect = chai.expect;

var thatValue = require('../../../index');

describe('String validator test', function() {

    describe('method is number', function() {
        it('should return false for regular number', function() {
            expect(thatValue(123).is.string().valid()).to.equal(false);
            expect(thatValue(-113452).is.string().valid()).to.equal(false);
            expect(thatValue(112345).is.string().valid()).to.equal(false);
            expect(thatValue(1.023).is.string().valid()).to.equal(false);
            expect(thatValue(null).is.string().valid()).to.equal(false);
            expect(thatValue(undefined).is.string().valid()).to.equal(false);
            expect(thatValue([]).is.string().valid()).to.equal(false);
            expect(thatValue({}).is.string().valid()).to.equal(false);
        });

        it('should return true for all strings', function() {
            expect(thatValue('a123').is.string().valid()).to.equal(true);
            expect(thatValue('a123a').is.string().valid()).to.equal(true);
            expect(thatValue('123').is.string().valid()).to.equal(true);
            expect(thatValue(JSON.stringify({a: '123'})).is.string().valid()).to.equal(true);
        });
    });
});