'use strict';

var chai = require('chai');
var expect = chai.expect;

var thatValue = require('../../../index');

describe('Number validator test', function() {

    describe('method is number', function() {
        it('should return true for regular number', function() {
            expect(thatValue(123).is.number().valid()).to.equal(true);
            expect(thatValue(-113452).is.number().valid()).to.equal(true);
            expect(thatValue(112345).is.number().valid()).to.equal(true);
            expect(thatValue(1.023).is.number().valid()).to.equal(true);
        });

        it('should return false for all strings', function() {
            expect(thatValue('a123').is.number().valid()).to.equal(false);
            expect(thatValue('a123a').is.number().valid()).to.equal(false);
            expect(thatValue('123').is.number().valid()).to.equal(false);
        });
    });
});