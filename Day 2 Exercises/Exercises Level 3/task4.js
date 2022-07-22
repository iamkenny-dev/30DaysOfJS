// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.

let income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let income1 = income.match(5000);
let income11 = income.substring(8, 13);

console.log(income1);
console.log(income11);

let annualBonus = income.match(10000);
let annualBonus1 = income.substring(42, 47);

console.log(annualBonus);
console.log(annualBonus1);

let income2 = income.match(15000);
let income22 = income.substring(67, 72);

console.log(income2);
console.log(income22);

let totalAnnualIncome = Number(income11 * 12) + Number(annualBonus1) + Number(income22 *12);
console.log(totalAnnualIncome);
