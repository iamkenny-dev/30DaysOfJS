// Develop a small script which generate any number of characters random id:
//
//   fe3jo1gl124g
//     xkqci4utda1lmbelpkm03rba
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
