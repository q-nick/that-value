'use strict';

module.exports = function() {
    this.pushValidation({
        name: 'email',
        validator: validator
    });
    return this;
};

function validator(value) {
    return typeof value === 'string' && /^[\w]+((\.[+\-_&!$\w])+|[+\-_&!$\w]+)*@([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}$/g.test(value);
}