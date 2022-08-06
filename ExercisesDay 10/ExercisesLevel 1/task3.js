// Remove an element from a set

const countries = ['Finland', 'Sweden', 'Norway']
const county = new Set(countries);
console.log(county);
console.log(county.delete('Finland'));
console.log(county.size);
