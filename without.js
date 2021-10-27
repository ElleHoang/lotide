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

const without = function(srcArr, itemsToRmArr) {
  let newArr = [...srcArr];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < itemsToRmArr.length; j++) {
      if (newArr[i] === itemsToRmArr[j]) {
        newArr.splice(i, 1);
      }
    }
  }
  console.log(newArr);
};
//TEST CASE
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
