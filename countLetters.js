const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🚨🚨🚨 Assertion Failed: " + actual + " !== " + expected);
  }
};

//function called countLetters
const countLetters = function(sentence) {
  const obj = {};

  for (const letter of sentence.split(" ").join("")) {
    if (obj[letter]) {
      obj[letter] += 1;
    } else {
      obj[letter] = 1;
    }
  }
  return obj;
};

console.log(countLetters("lighthouse in the house"));
assertEqual(countLetters("lighthouse in the house"),);