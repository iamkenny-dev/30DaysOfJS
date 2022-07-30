// Develop a small script which generate array of 5 random numbers and the numbers must be unique

let array = [];
var i;
for (i = 1; i <= 5; i++) {
	            let x = Math.floor(Math.random() * 11);
	            if (array.includes(x)) {
			                    i--;
			                    continue;
			                }
	            else {
			                array.push(x);
			                }
}
console.log(array);

