// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
//
// console.log(userIdGenerator());
// 41XTDbE
//
function userIdGenerator(length) {
	var length;
	        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
		        retVal = "";
	    for (var i = 0, n = charset.length; i < length; ++i) {
		            retVal += charset.charAt(Math.floor(Math.random() * n));
		        }
	    console.log(retVal);
}

userIdGenerator(10);
