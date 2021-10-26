const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const head = function(arr) {
  return arr[0];
};
assertEqual(head([3, 4, 5]), 5); // failed assertion b/c first element is not expected.
assertEqual(head([]), 2); // failed assertion b/c empty array returns undefined as its head
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //pass assertion b/c array returns expected element
assertEqual(head(["Labs"]), "Labs"); // pass assertion b/c array has only one element that is the expected element