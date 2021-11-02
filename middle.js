const middle = function(array) {

  let newArr = [];
  if (array.length <= 2) {
    return newArr;
  } else if (array.length % 2 === 0) {
    newArr.push(array[(array.length / 2) - 1]);
    newArr.push(array[array.length / 2]);
  } else {
    newArr.push(array[Math.floor(array.length / 2)]);
  }

  return newArr;
};
module.exports = middle;

// TEST CASE
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);