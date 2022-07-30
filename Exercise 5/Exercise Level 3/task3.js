// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
//
const countries = [
	  'Albania',
	  'Bolivia',
	  'Canada',
	  'Denmark',
	  'Ethiopia',
	  'Finland',
	  'Germany',
	  'Hungary',
	  'Ireland',
	  'Japan',
	  'Kenya'
]

countries.push('Liberia');
console.log(countries)
console.log(countries.splice(0, 5));
console.log(countries);
