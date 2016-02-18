'use strict';

var chai = require('chai');
var expect = chai.expect;

var thatValue = require('../../../index');

describe('Contains validator test', function() {

    describe('method contains', function() {
        it('should return false', function() {
            expect(thatValue(123).is.contains('a').valid()).to.equal(false);
            expect(thatValue(null).is.contains('a').valid()).to.equal(false);
            expect(thatValue(undefined).is.contains('a').valid()).to.equal(false);
            expect(thatValue([]).is.contains('a').valid()).to.equal(false);
            expect(thatValue({}).is.contains('a').valid()).to.equal(false);

            expect(thatValue('asdfasdf@drgsdrgdsrg').is.contains('z').valid()).to.equal(false);
            expect(thatValue('123123@dsrgsdrg').is.contains('z').valid()).to.equal(false);
        });

        it('should return true', function() {
            expect(thatValue('afsdfasdf@drgdrg.pl').is.contains('a').valid()).to.equal(true);
            expect(thatValue('a+++++sdf@drgdrg.pl').is.contains('a').valid()).to.equal(true);
            expect(thatValue('a@a.as').is.contains('a').valid()).to.equal(true);
        });
    });
});