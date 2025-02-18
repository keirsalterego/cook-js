// Dates

let myDate = new Date();
console.log(myDate); // 2021-09-19T06:00:00.000Z

console.log(myDate.toString()); // Mon Sep 20 2021 11:30:00 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Mon Sep 20 2021

console.log(typeof myDate); // object

let myCreatedDate = new Date('2021-09-20');
console.log(myCreatedDate); // 2021-09-19T18:30:00.000Z
console.log(myDate.toLocaleString());

console.log(myDate.getFullYear()); // 2021