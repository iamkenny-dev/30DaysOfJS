// Using the above countries array, find the country containing the biggest number of characters.
//
// Ethiopia

const countries = [ 'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya' ]
let length = 0;
let longestCountry;
for (let i = 0; i < countries.length; i++) {
	if (countries[i].length > length) {
		length = countries[i].length;
		longestCountry = countries[i];
	}
}
console.log(longestCountry);
