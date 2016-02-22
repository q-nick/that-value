'use strict';

module.exports = function(stringToContain) {
    this.pushValidation({
        name: 'contains',
        validator: function(value) {
            return validator(value, stringToContain);
        }
    });
    return this;
};

function validator(value, stringToContain) {
    return typeof value === 'string' && value.indexOf(stringToContain) !== -1;
}