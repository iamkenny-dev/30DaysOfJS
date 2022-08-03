// Write a function called isPrime, which checks if a number is prime number.

function isPrime(num) {
	    if (num <= 1) return false;
	  if (num === 2) return true;

	  // storing the calculated value would be much 
	//   // better than calculating in each iteration
	//     var sqrt = Math.sqrt(num);
	//
	//       for (var i = 2; i <= sqrt; i++) 
	//           if (num % i === 0) return false;
	//             return true;
	//             }
	//             console.log(isPrime(9))
