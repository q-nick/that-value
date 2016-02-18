'use strict';

module.exports = function(maxLength) {
    this.pushValidation(function(value) {
        return validator(value, maxLength);
    });
    return this;
};

function validator(value, maxLength) {
    return typeof value === 'string' && value.length < maxLength;
}