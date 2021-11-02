const { assert } = require('chai');
const eqObjects = require('../eqObjects');

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // True
// 
// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // False
// 
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // True
// 
// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // False