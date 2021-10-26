const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(arr) {
  return arr.slice(1);
};

const array = ["Hello"];
const tailedArr = tail(array);
assertEqual(tailedArr.length, 0);

