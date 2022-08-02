Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
//
// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0

// Math.max returns 

function findMax(x, y, z) {
	console.log(Math.max(x, y, z))
}
findMax(1, 2, 3);

function findMax(x, y, z) {
	    if (x > y && x > z) {
		            console.log(x);
		        } else if (y > x && y > z) {
				        console.log(y);
				    } else {
					            console.log(z);
					        }
	    
}
findMax(0, 10, 5);
