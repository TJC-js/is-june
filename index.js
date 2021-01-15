/*!
 * is-june <https://github.com/TJC-js/is-june>
 *
 * Copyright (c) 2021-current, Tim Cane.
 * Released under the MIT License.
 */

'use strict';

var isDate = require("is-a-date");
var month = require("month-enum");

module.exports = function isJune(value) {
    if(!isDate(value)){
        throw new Error('expected a date');
    }

    return value.getMonth() == month.June;
};