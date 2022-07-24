// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let season = prompt('Enter a month: ');
if (season == 'september' || season == 'october' || season == 'november') {
	console.log('season is autumn');
} else if (season =='december' || season == 'january' || season == 'february') {
	console.log('season is winter');
} else if (season == 'march' || season == 'april' || season == 'may') {
	console.log(season == 'june' || season == 'july' || season == 'august');
} else {
	console.log('you entered a wrong season');
} 
