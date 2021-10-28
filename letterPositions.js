// function letterPositions
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

const letterPositions = function(sentence) {
  const results = {};
  // return all indices (zero-based positions) in string where charac is found (loop to find)
  for (let i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i) === " ") {
      // ignore space
    } else if (results[sentence.charAt(i)]) {
      results[sentence.charAt(i)].push(i);
    } else {
      results[sentence.charAt(i)] = [i];
    }
  }
  return results;
};

assertArraysEqual(letterPositions("Lighthouse in the house").g, [2]);
// multiple numbers may rep all places in string that it shows up
// { l: [0], i: [1, 11], g: [2], h: [3, 5, 15, 18], t: [4, 14], o: [6, 19], u: [7, 20], s: [8, 21], e: [9, 16, 22], n: [12] }
