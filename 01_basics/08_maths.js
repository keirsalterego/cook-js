// Date: 2021-09-19

const score = 400
console.log(score);

const balance = new Number(200)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // toFixed : 200.00 : 2 decimal places
console.log(balance.toPrecision(4)); // toPrecision : 200 : 4 digits
console.log(balance.valueOf()); // valueOf : 200    : value of the number

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // toLocaleString : 10,00,000

// +++++++++++++++ MATHS +++++++++++++++ //
console.log(Math);
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.round(3.4)); // 3
console.log(Math.ceil(3.4)); // 4
console.log(Math.floor(3.4)); // 3
console.log(Math.trunc(3.4)); // 3
console.log(Math.trunc(3.9)); // 3
console.log(Math.trunc(-3.9)); // -3
console.log(Math.abs(-3.9)); // 3.9
console.log(Math.abs(-3)); // 3
console.log(Math.sqrt(9)); // 3
console.log(Math.cbrt(27)); // 3
console.log(Math.pow(2, 3)); // 8
console.log(Math.min(2, 3, 4, 5)); // 2
console.log(Math.max(2, 3, 4, 5)); // 5


console.log(Math.random()); // random number between 0 and 1
console.log(Math.floor(Math.random() * 10)); // random number between 0 and 10
console.log(Math.floor(Math.random() * 10) + 1); // random number between 1 and 10


const max = 10
const min = 15
Math.random() * (max - min) + 1 // random number between 10 and 15

