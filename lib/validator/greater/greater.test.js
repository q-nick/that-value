'use strict';

var chai = require('chai');
var expect = chai.expect;

var thatValue = require('../../../index');

describe('Greater validator test', function() {

    describe('method is number greater/lower than', function() {
        it('should return true', function() {
            var effect = thatValue(1.0000000001).is.greaterThan(1).valid();
            expect(effect).to.equal(true);
            //expect(thatValue(2).is.number.greater.than(1)).to.equal(true);
        });

        it('should return false', function() {
        });
    });

});