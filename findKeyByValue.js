const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🚨🚨🚨 Assertion Failed: " + actual + " !== " + expected);
  }
};

// function findKeyByValue takes object & value
const findKeyByValue = function(obj, val) {
// scan object
  for (let key of Object.keys(obj)) {
    // return first key containing given value
    if (obj[key] === val) {
      return key;
    }
  }
  // no key w/ given value is found, return undefined
  return undefined;
};



// TEST CASE
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);