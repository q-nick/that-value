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

    describe('numbers', function() {
        it('should return false and contains all errors', function() {
            var validation =
                ThatValue(null)
                    .is.number()
                    .is.string()
                    .is.email()
                    .and.greaterThan(5)
                    .and.lowerThan(5)
                    .and.shorterThan(5)
                    .and.longerThan(5);
            var errors = validation.getErrors();

            expect(validation.valid()).to.equal(false);
            validation.valid();
            validation.valid();
            validation.valid();
            expect(errors.length).to.equal(7);
            expect(errors.indexOf('number')).not.to.equal(-1);
            expect(errors.indexOf('string')).not.to.equal(-1);
            expect(errors.indexOf('email')).not.to.equal(-1);
            expect(errors.indexOf('greaterThan')).not.to.equal(-1);
            expect(errors.indexOf('lowerThan')).not.to.equal(-1);
            expect(errors.indexOf('shorterThan')).not.to.equal(-1);
            expect(errors.indexOf('longerThan')).not.to.equal(-1);
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

var GreaterValidatorTest = require('./lib/validator/greaterThan/greaterThan.test.json');
runTests(GreaterValidatorTest.greaterThan, 'greaterThan');

var LowerValidatorTest = require('./lib/validator/lowerThan/lowerThan.test.json');
runTests(LowerValidatorTest.lowerThan, 'lowerThan');

var ShorterValidatorTest = require('./lib/validator/shorterThan/shorterThan.test.json');
runTests(ShorterValidatorTest.shorterThan, 'shorterThan');

var LongerValidatorTest = require('./lib/validator/longerThan/longerThan.test.json');
runTests(LongerValidatorTest.longerThan, 'longerThan');

var IPValidatorTest = require('./lib/validator/ip/ip.test.json');
runTests(IPValidatorTest.ip, 'ip');

var VINValidatorTest = require('./lib/validator/vin/vin.test.json');
runTests(VINValidatorTest.vin, 'vin');

var URIValidatorTest = require('./lib/validator/uri/uri.test.json');
runTests(URIValidatorTest.uri, 'uri');

var ZipCodeValidatorTest = require('./lib/validator/zipCode/zipCode.test.json');
runTests(ZipCodeValidatorTest.zipCode, 'zipCode');

function executeTest(test, validator, type) {
    var isComplexTest = false;
    if (typeof test === 'object' && test && 'value' in test) {
        isComplexTest = true;
    }

    if (!isComplexTest) {
        it(test + ' is ' + validator + '  - ' + type, function() {
            //do it in small loop for stress tests
            var effect = null;
            for (var i = 0; i < 1; i++) {
                effect = ThatValue(test).is[validator]().valid();
            }
            expect(effect).to.equal(type === 'valid');
        });
    } else {
        it(test.value + ' is ' + validator + ' ' + test.arg + ' - ' + type, function() {
            //do it in small loop for stress tests
            var effect = null;
            for (var i = 0; i < 1; i++) {
                effect = ThatValue(test.value).is[validator](test.arg).valid();
            }
            expect(effect).to.equal(type === 'valid');
        });
    }

    if (type === 'invalid') {
        it('should save error name - ' + validator + ' - to errors list', function() {
            var validation = null;
            if (!isComplexTest) {
                validation = ThatValue(test).is[validator]();
            } else {
                validation = ThatValue(test.value).is[validator](test.arg);
            }
            expect(validation.getErrors().indexOf(validator)).to.equal(-1);
            validation.valid();
            expect(validation.getErrors().indexOf(validator)).not.to.equal(-1);
        });
    }
}

function runTests(tests, validator) {
    describe(validator[0].toUpperCase() + validator.slice(1) + ' validator', function() {
        describe('valid values tests', function() {
            for (var i = 0; i < tests.valid.length; i++) {
                executeTest(tests.valid[i], validator, 'valid');
            }
        });
        describe('invalid values tests', function() {
            for (var j = 0; j < tests.invalid.length; j++) {
                executeTest(tests.invalid[j], validator, 'invalid');
            }
        });
    });
}

