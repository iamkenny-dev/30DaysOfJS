// Write a function which takes any number of arguments and return the sum of the arguments
//
// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10

function argSum(...arr) {
	    let sum = 0;
	    sum = sum + arr;
	    console.log(sum);
}

argSum(1, 2);
