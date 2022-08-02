// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month) {
	    if (month >= 0 || month <= 3) {
		            console.log('Autumn');
		        }
	    else if (month >= 4 || month <= 6) {
		            console.log('Winter');
		        }
	    else if (month >= 7 || month <= 9) {
		            console.log('Spring');
		        }
	    else if (month >= 10 || month <= 12) {
		            console.log('Summer');
		        }
	    else {
		            console.log('Enter a correct month number')
		        }
}
checkSeason(6);
