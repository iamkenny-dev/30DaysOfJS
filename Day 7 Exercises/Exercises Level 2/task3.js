// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printArray(...arr) {
	    console.log(arr)
}
printArray(1, 3, 5);

function printArray() {
	    console.log(arguments);
}
printArray([1, 2, 3]);

const printArrayy = (...arr) => console.log(arr);
printArrayy([1, 2, 3]);
