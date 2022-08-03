// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

var sum = 0;
function average(array) {
	    for (i = 0; i < array.length; i++) {
		            sum = sum + array[i];
		        }
	    console.log(sum)
	    let arraySum = sum;
	    let avg = arraySum / array.length
	    console.log(avg)
}
array = [1, 2, 3, 4, 8]
average(array);

var sum = 0;
function average(array) {
	    for (const num of array) {
		            sum = sum + num;
		        }
	    console.log(sum)
	    let arraySum = sum;
	    let avg = arraySum / array.length
	    console.log(avg)
}
array = [1, 2, 3, 4, 8]
average(array);
