const _ = require('lodash')// TODO

const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);
const differenceBy = _.differenceBy( [2.3, 3.4],[2.1, 1.2], Math.floor);
console.log(myOddEvenArray);
console.log(differenceBy)