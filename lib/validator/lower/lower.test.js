'use strict';

var chai = require('chai');
var expect = chai.expect;

var thatValue = require('../../../index');

describe('Lower validator test', function() {

    describe('method is number lower than', function() {
        it('should return true', function() {
            var effect = thatValue(1.0000000001).is.lowerThan(1.1).valid();
            expect(effect).to.equal(true);

            effect = thatValue(2).is.lowerThan(3).valid();
            expect(effect).to.equal(true);

            effect = thatValue(22345234).is.lowerThan(345612341234).valid();
            expect(effect).to.equal(true);
        });

        it('should return false', function() {
            var effect = thatValue('1.0000000001').is.lowerThan('2').valid();
            expect(effect).to.equal(false);

            effect = thatValue(2).is.lowerThan(2).valid();
            expect(effect).to.equal(false);

            effect = thatValue(3).is.lowerThan(2.99999999999).valid();
            expect(effect).to.equal(false);
        });
    });

});