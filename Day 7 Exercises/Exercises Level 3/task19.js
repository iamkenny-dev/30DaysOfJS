// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
//
// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]

function sevenRandomNum() {
	let array = []
	let num;
	for (i = 0; i < 7; i++) {
		    num = Math.floor(Math.random() * 11);
		    if (array.includes(num)) {
			            i--;
			            continue;
			        }
		    else {
			            array.push(num);
			        }
	}
	console.log(array);
}

sevenRandomNum();

let array = [];
let i = 0;
do {
	    let num = Math.floor(Math.random() * 11);
	    if (array.includes(num) === false) {
		            array.push(num)
		        }
	    i++;
}while (array.length < 7)
console.log(array);
