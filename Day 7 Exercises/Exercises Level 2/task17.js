// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
//
// console.log(randomHexaNumberGenerator());
// '#ee33df'

const getRanHex = size => {
	  let result = [];
	  let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

	  for (let n = 0; n < size; n++) {
		      result.push(hexRef[Math.floor(Math.random() * 16)]);
		    }
	  return '#' + result.join('');
}

console.log(getRanHex(6));
