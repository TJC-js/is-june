'use strict';

require('mocha');
var assert = require('assert');

var isJune = require("./");

describe('isNotDate', function() {
    it('should return true if date is june', function() {
        assert(isJune(new Date("2021-06-06")));
    });

    it('should return false if date is not june', function() {
        assert(!isJune(new Date("2021-02-02")));
    });

    it('should throw an error when an invalid value is passed', function() {
        assert.throws(() => isJune(), /expected a date/);
        assert.throws(() => isJune('not a date'), /expected a date/);
      });
});
