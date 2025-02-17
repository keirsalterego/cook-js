const gameName = new String('Keir')

console.log(gameName) // Keir
console.log(gameName[0]); // by index number
console.log(gameName.length); // length of the string
console.log(gameName.toUpperCase()); // toUpperCase
console.log(gameName.toLowerCase()); // toLowerCase

console.log(gameName.charAt(3)); // by index number 
console.log(gameName.indexOf('e')); // by character


const newGameName = gameName.substring(1, 3)
console.log(newGameName); 

const newGameName2 = gameName.slice(-1, 3)
console.log(newGameName2);

const newGameName3 = "    Manish    "
console.log(newGameName3.trim()); // trim

console.log(gameName.replace('Keir', 'Manish')); // replace

console.log(gameName.split('')); // split

const url = 'https://www.google.com/search?q=who%20is%20manish'
console.log(encodeURI(url)); // encodeURI

console.log(url.replace('-', '%20')); // replace