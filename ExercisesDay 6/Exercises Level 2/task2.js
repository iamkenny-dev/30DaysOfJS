// Write a script which generates a random hexadecimal number.
//
// '#ee33df'
let x = '#';
function randomChar(Len) {
	    
	    let char = '0123456789ABCDEF';
	    let charLent = char.length;
	    let result = '';
	    for (let i = 1; i <= Len; i++) {
		            result += char.charAt(Math.floor(Math.random() * charLent));
		        }
	    return result;
}
console.log(x + randomChar(6));
