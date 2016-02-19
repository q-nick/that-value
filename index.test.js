'use strict';

var chai = require('chai');
var expect = chai.expect;

var ThatValue = require('./index');

describe('Complex validator test', function() {

    describe('strings', function() {
        it('should return true', function() {
            var effect =
                ThatValue('paul@mail.pl')
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
                ThatValue(12345)
                    .is.number()
                    .and.greaterThan(5)
                    .and.lowerThan(99999)
                    .valid();

            expect(effect).to.equal(true);

        });
    });

});

var NumberValidatorTest = require('./lib/validator/number/number.test.json');
runTests(NumberValidatorTest.number, 'number');

var StringValidatorTest = require('./lib/validator/string/string.test.json');
runTests(StringValidatorTest.string, 'string');

var EmailValidatorTest = require('./lib/validator/email/email.test.json');
runTests(EmailValidatorTest.email, 'email');

var ContainsValidatorTest = require('./lib/validator/contains/contains.test.json');
runTests(ContainsValidatorTest.contains, 'contains');

var GreaterValidatorTest = require('./lib/validator/greater/greater.test.json');
runTests(GreaterValidatorTest.greater, 'greaterThan');

var LowerValidatorTest = require('./lib/validator/lower/lower.test.json');
runTests(LowerValidatorTest.lower, 'lowerThan');

var ShorterValidatorTest = require('./lib/validator/shorter/shorter.test.json');
runTests(ShorterValidatorTest.shorter, 'shorterThan');

var LongerValidatorTest = require('./lib/validator/longer/longer.test.json');
runTests(LongerValidatorTest.longer, 'longerThan');

function executeTest(test, validator, type) {
    var isComplexTest = false;
    if (typeof test === 'object' && test && 'value' in test) {
        isComplexTest = true;
    }

    if (!isComplexTest) {
        it(test + ' is ' + validator + '  - ' + type, function() {
            expect(ThatValue(test).is[validator]().valid()).to.equal(type === 'valid');
        });
    } else {
        it(test.value + ' is ' + validator + ' ' + test.arg + ' - ' + type, function() {
            expect(ThatValue(test.value).is[validator](test.arg).valid()).to.equal(type === 'valid');
        });
    }
}

function runTests(tests, validator) {
    describe(validator[0].toUpperCase() + validator.slice(1) + ' validator', function() {
        describe('valid test', function() {
            for (var i = 0; i < tests.valid.length; i++) {
                executeTest(tests.valid[i], validator, 'valid');
            }
        });
        describe('invalid test', function() {
            for (var j = 0; j < tests.invalid.length; j++) {
                executeTest(tests.invalid[j], validator, 'invalid');
            }
        });
    });
}

