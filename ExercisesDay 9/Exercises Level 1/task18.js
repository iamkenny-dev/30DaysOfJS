// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

const sum = countries.reduce((acc, cur ) => acc + cur);
console.log(`${sum} are north European countries`);
