'use strict';

module.exports = function(compareValue) {
    this.pushValidation({
        name: 'greaterThan',
        validator: function(value) {
            return validator(value, compareValue);
        }
    });
    return this;
};

function validator(value, compareValue) {
    return typeof value === 'number' && !isNaN(value) && value > compareValue;
}