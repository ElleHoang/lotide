const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🚨🚨🚨 Assertion Failed: " + actual + " !== " + expected);
  }
};
// findKey function takes OBJECT & CALLBACK
// SCAN object
// return 1st key for callback return truthy value
// no key found = undefined
const findKey = function(object, callback) { 
  for (let key of Object.keys(object)) {
    if (callback(object[key])) {
      return key;
    }
  }
}; 

assertEqual(findKey({
  "Saturn": {moons: 82},
  "Venus": {moons: 0},
  "Jupiter": {moons: 79},
  "Earth": {moons: 1},
  "Neptune": {moons: 14},
  "Mars": {moons: 2},
  "Mercury": {moons: 0},
  "Uranus": {moons: 27}
}, planet => planet.moons === 1), "Earth");

assertEqual(findKey({
  "Saturn": {moons: 82},
  "Venus": {moons: 0},
  "Jupiter": {moons: 79},
  "Earth": {moons: 1},
  "Neptune": {moons: 14},
  "Mars": {moons: 2},
  "Mercury": {moons: 0},
  "Uranus": {moons: 27}
}, planet => planet.moons === 1), "Mars");

assertEqual(findKey({
  "Saturn": {moons: 82},
  "Venus": {moons: 0},
  "Jupiter": {moons: 79},
  "Earth": {moons: 1},
  "Neptune": {moons: 14},
  "Mars": {moons: 2},
  "Mercury": {moons: 0},
  "Uranus": {moons: 27}
}, planet => planet.moons > 15 && planet.moons < 30), "Uranus");