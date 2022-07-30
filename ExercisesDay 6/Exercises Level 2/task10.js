// Using the above countries array, find the country containing only 5 characters.
//
// ['Japan', 'Kenya']

let length = 5;
let longestCountry = [];
for (let i = 0; i < countries.length; i++) {
	        if (countries[i].length == length) {
			                
			                longestCountry.push(countries[i]);
			        }
}
console.log(longestCountry);
