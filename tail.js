const tail = function(arr) {
  return arr.slice(1);
};
module.exports = tail;

const array = ["Hello"];
const tailedArr = tail(array);
assertEqual(tailedArr.length, 0);

