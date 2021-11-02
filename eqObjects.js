const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key of Object.keys(object1)) {
      if (Array.isArray(object1[key])) { 
        if (eqArrays(object1[key], object2[key])) {
        } else {
          console.log("False: no key match");
          return false;
        }
      } else {
        if (assertEqual(object1[key], object2[key])) { 
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