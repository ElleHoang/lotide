const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } 
  }
  return true;
};

const assertArraysEqual = function(actualArrs, expectedArrs) {
    if (eqArrays(actualArrs, expectedArrs) === true) {
      console.log(`✅✅✅ Assertion Passed: ${actualArrs} === ${expectedArrs}`);
    } else {
      console.log(`🚨🚨🚨 Assertion Failed: ${actualArrs} !== ${expectedArrs}`);
    }
};

// map function takes TWO ARGs: 1. array to map; 2. Callback function
//return new array based on result of callback function

const words = ["gound", "control", "to", "major", "tom"];

/*RefError: map is not defined
const results1 = map(words, word => word[0]);
console.log(results1);
*/
const map = function(array, callback) { // map (higher-order) function can call callback function
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  console.log(results);
  return results;
};
assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(words, word => word.length), [ 5, 7, 2, 5, 3 ]);
assertArraysEqual(map(words, word => words.join(' ').toString() + "!"), ['gound control to major tom!', 'gound control to major tom!', 'gound control to major tom!', 'gound control to major tom!', 'gound control to major tom!']);