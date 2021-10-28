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

const middle = function(array) {

  let newArr = [];
  
  if (array.length <= 2) {
  } else if (array.length % 2 === 0) {
       newArr.push(array[(array.length / 2) - 1]);
       newArr.push(array[array.length / 2]);  
  } else {
    newArr.push(array[Math.floor(array.length / 2)]);
  } 
  
  return newArr;
};

// TEST CASE
assertArraysEqual(middle([1]), []); 
assertArraysEqual(middle([1, 2]), []); 
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3]), [2]); 
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); 

