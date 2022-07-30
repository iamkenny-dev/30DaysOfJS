//Develop a small script which generate array of 5 random numbers and the numbers must be unique

let x;
let array = [];
let i = 0;
do {
	    x = Math.floor(Math.random() * 11);
	    if (array.includes(x) == false) {
		            array.push(x);
		        }
	    i++
}while (array.length < 5);
console.log(array);


