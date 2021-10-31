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

// takeUntil function takes 2 PARAMETERS: 1. array to work with; 2. callback
// callback should only be provided 1 VALUE: item in array
// will keep collecting items from array until callback returns truthy value

const grocery = ["Milk", "Carrot", "Onion", "Bread", "Beef", "Corn", "Rice"];

const takeUntil = function(array, callback) {
  let bag = [];
  for (let item of array) {
    if (callback(item)) {
      console.log(`Your items of: ${bag}  have been bagged.`);
      return bag;
    } else {
      bag.push(item);
    }
  }
};
assertArraysEqual(takeUntil(grocery, item => item === "Beef"), ["Milk", "Carrot", "Onion", "Bread"]);

// return "slice of array w/ elements taken from beginning"
// should keep going until callback/predicate return truthy value
