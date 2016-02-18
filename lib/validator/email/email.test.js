'use strict';

var chai = require('chai');
var expect = chai.expect;

var thatValue = require('../../../index');

describe('Email validator test', function() {

    describe('method is email', function() {
        it('should return false', function() {
            expect(thatValue(123).is.email().valid()).to.equal(false);
            expect(thatValue(null).is.email().valid()).to.equal(false);
            expect(thatValue(undefined).is.email().valid()).to.equal(false);
            expect(thatValue([]).is.email().valid()).to.equal(false);
            expect(thatValue({}).is.email().valid()).to.equal(false);

            expect(thatValue('asdfasdf@drgsdrgdsrg').is.email().valid()).to.equal(false);
            expect(thatValue('123123@dsrgsdrg').is.email().valid()).to.equal(false);
        });

        it('should return true', function() {
            expect(thatValue('afsdfasdf@drgdrg.pl').is.email().valid()).to.equal(true);
            expect(thatValue('a+++++sdf@drgdrg.pl').is.email().valid()).to.equal(true);
            expect(thatValue('a@a.as').is.email().valid()).to.equal(true);
        });
    });
});