const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } 
  }
  return true;
}

const assertArraysEqual = function(actualArrs, expectedArrs) {
    if (eqArrays(actualArrs, expectedArrs) === true) {
      console.log(`✅✅✅ Assertion Passed: ${actualArrs} === ${expectedArrs}`);
    } else {
      console.log(`🚨🚨🚨 Assertion Failed: ${actualArrs} !== ${expectedArrs}`);
    }
}

assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]);
assertArraysEqual([1, 2, 3, 4], [1, 2, 5, 4]);
assertArraysEqual([], []);