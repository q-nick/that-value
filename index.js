'use strict';

module.exports = function(value) {
    return new thatValue(value);
};

function thatValue(value) {
    //validators
    var validators = {};
    validators.number = require('./lib/validator/number/number.js').bind(this);
    validators.greaterThan = require('./lib/validator/greater/greater.js').bind(this);
    validators.lowerThan = require('./lib/validator/lower/lower.js').bind(this);
    validators.string = require('./lib/validator/string/string.js').bind(this);
    validators.email = require('./lib/validator/email/email.js').bind(this);
    validators.contains = require('./lib/validator/contains/contains.js').bind(this);
    validators.shorterThan = require('./lib/validator/shorter/shorter.js').bind(this);
    validators.longerThan = require('./lib/validator/longer/longer.js').bind(this);

    var validations = [];

    this.pushValidation = function(validation) {
        validations.push(validation);
    };

    this.addValidator = function(key, validation) {
        validators[key] = validation.bind(this);
    };

    this.valid = function() {
        for (var i = 0; i < validations.length; i++) {
            if (!validations[i](value)) {
                return false;
            }
        }
        return true;
    };

    this.is = validators;
    this.contains = validators;
    this.and = validators;
    this.or = this;

}