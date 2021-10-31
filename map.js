// map function takes TWO ARGs: 1. array to map; 2. Callback function
//return new array based on result of callback function

const words = ["gound", "control", "to", "major", "tom"];

/*RefError: map is not defined
const results1 = map(words, word => word[0]);
console.log(results1);
*/
const map = function(array, callback) { // map (higher-order) function can call callback function
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  //console.log(results);
  return results;
};
map(words, word => word[0]);