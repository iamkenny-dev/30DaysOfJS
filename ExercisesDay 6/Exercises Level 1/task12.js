// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
//
//   [2550, 2500]
//
let total = 0;
let tota = 0;
for (i = 0; i <= 100; i++) {
	    if (i % 2 == 0) {
		        total = total + i;
		        }
	    if (i % 2 != 0) {
		        tota = tota + i;
		        }
}
console.log([total, tota]);
