'use strict';

module.exports = function(compareValue) {
    this.pushValidation(function(value) {
        return validator(value, compareValue);
    });
    return this;
};

function validator(value, compareValue) {
    return typeof value === 'number' && !isNaN(value) && typeof compareValue === 'number' && !isNaN(compareValue) && value < compareValue;
}