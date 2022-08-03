// Call your function sum, it takes any number of arguments and it returns the sum.

var sum = 0;
function arraySum(array){
	    for (const num of array) {
		            sum = sum + num;
		        }
	    console.log(sum);
}
arraySum();
