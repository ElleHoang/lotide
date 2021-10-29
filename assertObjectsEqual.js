const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return true;
  } else {
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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) { // compares length of returned array of objects keys
    for (let key of Object.keys(object1)) {
      if (Array.isArray(object1[key])) { // if object key has array
        if (eqArrays(object1[key], object2[key])) { // compare arrays
          // continue looping
        } else {
          console.log("False: no key match");
          return false;
        }
      } else {
        if (assertEqual(object1[key], object2[key])) { // compare primative values
          // continue looping
        } else {
          return false;
        }
      }
    }
    return true;
  
  } else {
    return false;
  }
};


const assertObjectsEqual = function(actualObj, expectedObj) {
  const inspect = require('util').inspect;
  if (eqObjects(actualObj, expectedObj)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actualObj)} === ${inspect(expectedObj)}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${inspect(actualObj)} !== ${inspect(expectedObj)}`);
  }
};

assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" });// True