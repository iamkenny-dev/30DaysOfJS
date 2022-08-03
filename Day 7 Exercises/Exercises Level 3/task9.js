// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

function factorial(n){
	  let answer = 1;
	  if (n == 0 || n == 1){
		      return answer;
		    }else{
			        for(var i = n; i >= 1; i--){
					      answer = answer * i;
					    }
			        return answer;
			      }  
}
let n = 4;
answer = factorial(n)
console.log("The factorial of " + n + " is " + answer);
