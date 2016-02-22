'use strict';

module.exports = function() {
    this.pushValidation({
        name: 'string',
        validator: validator
    });
    return this;
};

function validator(value) {
    return typeof value === 'string';
}