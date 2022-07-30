// Slice out the first 3 companies from the array

let companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

let sliced = companies.slice(0, i3);
console.log(sliced);

for (i = 0; i < 3; i++) {
	   companies.shift();
}
console.log(companies);
