// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let because = 'You cannot end a sentence with because because because is a conjunction';
let pattern = /because/gi;
console.log(because.match(pattern));
