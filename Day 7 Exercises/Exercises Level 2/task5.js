// Declare a function name swapValues. This function swaps value of x to y.
//
// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4

function swapValues(x, y) {
	    let swap = x;
	    x = y;
	    y = swap;
	    console.log(x, y)
}
swapValues(1, 2)
