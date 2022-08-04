// Write a function name rgbColorGenerator and it generates rgb colors.
//
// rgbColorGenerator()
// rgb(125,244,255)


function rgbColorGenerator() {
	let x = Math.floor(Math.random() * 256);
	let y = Math.floor(Math.random() * 256);
	let z = Math.floor(Math.random() * 256);

	console.log(`rgb(${x}, ${y}, ${z})`);
}

rgbColorGenerator()
