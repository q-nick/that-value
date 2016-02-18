'use strict';

var chai = require('chai');
var expect = chai.expect;

var thatValue = require('./index');

describe('Complex validator test', function() {

    describe('strings', function() {
        it('should return true', function() {
            var effect =
                thatValue('paul@mail.pl')
                    .is.string()
                    .is.email()
                    .and.contains('paul')
                    .and.shorterThan(15)
                    .and.longerThan(11)
                    .valid();

            expect(effect).to.equal(true);
        });
    });

    describe('numbers', function() {
        it('should return true', function() {
            var effect =
                thatValue(12345)
                    .is.number()
                    .and.greaterThan(5)
                    .and.lowerThan(99999)
                    .valid();

            expect(effect).to.equal(true);


        });
    });

});