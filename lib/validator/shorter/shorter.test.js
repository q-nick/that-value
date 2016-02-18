'use strict';

var chai = require('chai');
var expect = chai.expect;

var thatValue = require('../../../index');

describe('Shorter validator test', function() {

    describe('method contains', function() {
        it('should return false', function() {
            expect(thatValue(123).is.shorterThan(5).valid()).to.equal(false);
            expect(thatValue(null).is.shorterThan(5).valid()).to.equal(false);
            expect(thatValue(undefined).is.shorterThan(5).valid()).to.equal(false);
            expect(thatValue([]).is.shorterThan(5).valid()).to.equal(false);
            expect(thatValue({}).is.shorterThan(5).valid()).to.equal(false);

            expect(thatValue('abracadabra').is.shorterThan(5).valid()).to.equal(false);
        });

        it('should return true', function() {
            expect(thatValue('abracadabra').is.shorterThan(15).valid()).to.equal(true);
            expect(thatValue('abracadabra').is.shorterThan(12).valid()).to.equal(true);
        });
    });
});