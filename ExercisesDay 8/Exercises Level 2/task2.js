// Count logged in users, count users having greater than equal to 50 points from the following object.

let sum = 0;
const entries = Object.entries(users);
for (i = 0; i < 7; i++) {
	    if (entries[i][1].isLoggedIn === true) {
		            sum = sum + i;
		            console.log(sum);
	    }
}


