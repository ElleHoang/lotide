const assertEqual = require('../assertEqual'); // import assertEqual function

assertEqual(head([3, 4, 5]), 5);
assertEqual(head([]), 2);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Labs"]), "Labs");