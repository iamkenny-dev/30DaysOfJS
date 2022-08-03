// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

var sum = 0;
function sumOfArrayItems(array) {
	    for (const num of array) {
		            sum = sum + num
		        }
	    console.log(sum)
}
array = [1, 2, 3]
sumOfArrayItems(array)
