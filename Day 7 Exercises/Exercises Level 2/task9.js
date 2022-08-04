// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

var array;
var p;
function removeItem() {

	array = [1, 3, 5];
	let result = array.splice(0, 1);

	console.log(array);
}

removeItem()
