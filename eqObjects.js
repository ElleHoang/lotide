const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
    return true;
  } else {
    //console.log("🚨🚨🚨 Assertion Failed: " + actual + " !== " + expected);
    return false;
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

// create eqObjects function taking in 2 OBJECTS
const eqObjects = function(object1, object2) {
// 2 objects equal when have same num of keys
// value for each key in object1 = value for each key in object2
// use eqArrays when there is array value encountered for key
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key of Object.keys(object1)) {
      if (Array.isArray(object1[key])) { // if object key has array
        if (eqArrays(object1[key], object2[key])) { // compare arrays
          // continue looping
        } else {
          console.log("False: no key match");
          return false;
        }
      } else {
        if (assertEqual(object1[key], object2[key])) { // compare prim values
          // continue looping
        } else {
          console.log("False: no key match");
          return false;
        }
      }
    }
    console.log("True: key match");
  } else {
    console.log("False: no key match");
  }
};
// return true or false, based on perfect match(identical
// TEST CASE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // True

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // False

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // True

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // False