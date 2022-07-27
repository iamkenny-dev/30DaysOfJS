// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
//
// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.

let total = 0;
for (i = 0; i <= 100; i++) {
	    if (i % 2 == 0) {
		        total = total + i;
		        }
}
console.log(total);

let total = 0;
for (i = 0; i <= 100; i++) {
	    if (i % 2 != 0) {
		        total = total + i;
		        }
}
console.log(total);
