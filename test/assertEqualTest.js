const assertEqual = require('../assertEqual'); // import assertEqual function
const head = require('../head');

assertEqual(head([3, 4, 5]), 3);
assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Labs"]), "Labs");