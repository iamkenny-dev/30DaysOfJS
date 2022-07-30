// Slice out the middle IT company or companies from the array

let companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

let sliced = companies.slice(3, 4);
console.log(sliced);

companies[3] = companies[companies.length-1];
console.log(companies[3])
console.log(companies.pop());
console.log(companies);
