// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
//
// ['Albania', 'Bolivia','Ethiopia']

const countryWith = [];
const countryWithout = [];
for(let i = 0 ; i < countries.length; i++){
	        if (countries[i].includes("ia") === true) {
			                    countryWith.push(countries[i]);
			        }
	        else{
			                countryWithout.push(countries[i]);
			        }
}
console.log(countryWith);
console.log("These are countries ends without ia\n",countryWithout);
