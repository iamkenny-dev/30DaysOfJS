// Using the above countries array, create the following new array.
//
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

let mystring = countries.toString();
let uppercase = mystring.toUpperCase();
let array = uppercase.split(','); 
console.log(array);
