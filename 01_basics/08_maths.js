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
console.log(hundreds.toLocaleString(en-IN)); // toLocaleString : 10,00,000

// +++++++++++++++ MATHS +++++++++++++++ //

