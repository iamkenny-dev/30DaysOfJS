// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
//
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
//   'Not Found'
//
function modifyArray(array) {
	    if (array.length >= 5 ) {
		            array[4] = 'modify'
		            console.log(array);
		        }
	    else {
		            console.log('item not found');
		        }
}
let array = ['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']
console.log(modifyArray(array));


