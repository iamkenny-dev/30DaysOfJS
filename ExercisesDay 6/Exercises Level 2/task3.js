// Write a script which generates a random rgb color number.
//
// rgb(240,180,80)

var x = Math.floor((Math.random() * (255+1)));
var y = Math.floor((Math.random() * (255+1)));
var z = Math.floor((Math.random() * (255+1)));

console.log('rgb(' + x + ', ' + y + ', ' + z + ')');
