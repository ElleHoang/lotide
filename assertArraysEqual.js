const assertArraysEqual = function(actualArrs, expectedArrs) {
    if (eqArrays(actualArrs, expectedArrs) === true) {
      console.log(`✅✅✅ Assertion Passed: ${actualArrs} === ${expectedArrs}`);
    } else {
      console.log(`🚨🚨🚨 Assertion Failed: ${actualArrs} !== ${expectedArrs}`);
    }
};
module.exports = assertArraysEqual;

assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]);
assertArraysEqual([1, 2, 3, 4], [1, 2, 5, 4]);
assertArraysEqual([], []);