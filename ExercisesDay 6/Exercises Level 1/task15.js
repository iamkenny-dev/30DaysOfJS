// Develop a small script which generate a six characters random id:
//
// 5j2khz

function randomChar(Len) {
	    let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	    let charLent = char.length;
	    let result = '';
	    for (let i = 1; i <= Len; i++) {
		            result += char.charAt(Math.floor(Math.random() * charLent));
		        }
	    return result;
}
console.log(randomChar(6));
