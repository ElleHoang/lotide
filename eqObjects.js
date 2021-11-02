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