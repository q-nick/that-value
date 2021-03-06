'use strict';

module.exports = function(value) {
    return new thatValue(value);
};

function thatValue(value) {
    //validators
    var validators = {};
    validators.number = require('./lib/validator/number/number.js').bind(this);
    validators.greaterThan = require('./lib/validator/greaterThan/greaterThan.js').bind(this);
    validators.lowerThan = require('./lib/validator/lowerThan/lowerThan.js').bind(this);
    validators.string = require('./lib/validator/string/string.js').bind(this);
    validators.email = require('./lib/validator/email/email.js').bind(this);
    validators.contains = require('./lib/validator/contains/contains.js').bind(this);
    validators.shorterThan = require('./lib/validator/shorterThan/shorterThan.js').bind(this);
    validators.longerThan = require('./lib/validator/longerThan/longerThan.js').bind(this);
    validators.ip = require('./lib/validator/ip/ip.js').bind(this);
    validators.vin = require('./lib/validator/vin/vin.js').bind(this);
    validators.uri = require('./lib/validator/uri/uri.js').bind(this);
    validators.isbn = require('./lib/validator/isbn/isbn.js').bind(this);
    validators.zipCode = require('./lib/validator/zipCode/zipCode.js').bind(this);

    var validations = [];
    var errors = [];

    this.pushValidation = function(validation) {
        validations.push(validation);
    };

    this.addValidator = function(key, validation) {
        validators[key] = validation.bind(this);
    };

    this.getErrors = function() {
        return errors;
    };

    this.valid = function() {
        errors.splice(0, errors.length);
        var anyFalse = false;
        for (var i = 0; i < validations.length; i++) {
            if (!validations[i].validator(value)) {
                errors.push(validations[i].name);
                if (!anyFalse) anyFalse = true;
            }
        }
        return !anyFalse;
    };

    this.is = validators;
    this.and = validators;
}