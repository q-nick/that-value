'use strict';

var chai = require('chai');
var expect = chai.expect;

var thatValue = require('../../../index');

describe('Longer validator test', function() {

    describe('method contains', function() {
        it('should return false', function() {
            expect(thatValue(123).is.longerThan(5).valid()).to.equal(false);
            expect(thatValue(null).is.longerThan(5).valid()).to.equal(false);
            expect(thatValue(undefined).is.longerThan(5).valid()).to.equal(false);
            expect(thatValue([]).is.longerThan(5).valid()).to.equal(false);
            expect(thatValue({}).is.longerThan(5).valid()).to.equal(false);

            expect(thatValue('abracadabra').is.longerThan(11).valid()).to.equal(false);
            expect(thatValue('abracadabra').is.longerThan(15).valid()).to.equal(false);
        });

        it('should return true', function() {
            expect(thatValue('abracadabra').is.longerThan(5).valid()).to.equal(true);
            expect(thatValue('abracadabra').is.longerThan(10).valid()).to.equal(true);
        });
    });
});