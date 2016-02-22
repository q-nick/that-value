'use strict';

module.exports = function() {
    this.pushValidation({
        name: 'number',
        validator: validator
    });
    return this;
};

function validator(value) {
    return typeof value === 'number' && !isNaN(value);
}