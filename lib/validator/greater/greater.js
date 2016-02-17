'use strict';

module.exports = function(compareValue) {
    this.pushValidation(validator);
    return this;
};

function validator(value) {
    return value > 0;//TODO
}