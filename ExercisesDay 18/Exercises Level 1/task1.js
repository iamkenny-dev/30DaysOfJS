// Read the countries API using fetch and print the name of country, capital, languages, population and area.

const countriesAPI = 'https://restcountries.com/v2/all'
fetch(countriesAPI)
    .then(responsene => response.json())
    .then(data => {
	            console.log(data)
	        })
    .catch(error => console.log(error))
