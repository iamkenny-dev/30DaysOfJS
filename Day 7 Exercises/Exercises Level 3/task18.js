// JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

function isValidVariable(argument) {
	  var reGex =  '^([a-zA-Z_$][a-zA-Z\d_$]*)$';
	  if (argument[0].math(reGex)) {
		        console.log('valid');
		    }
	  else {
		        console.log('not valid');
		    }
}

isValidVariable();
