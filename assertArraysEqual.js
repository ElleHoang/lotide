const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actualArrs, expectedArrs) {
    if (eqArrays(actualArrs, expectedArrs) === true) {
      console.log(`✅✅✅ Assertion Passed: ${actualArrs} === ${expectedArrs}`);
    } else {
      console.log(`🚨🚨🚨 Assertion Failed: ${actualArrs} !== ${expectedArrs}`);
    }
};
module.exports = assertArraysEqual;