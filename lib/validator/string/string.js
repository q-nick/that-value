'use strict';

module.exports = function() {
    this.pushValidation(validator);
    return this;
};

function validator(value) {
    return typeof value === 'string';
}