// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
let score = prompt('Enter your score:');

if (score >= 80 && score <= 100){
	console.log('you got an A');	
}
else if (score >= 70 && score <= 89) {
	console.log('you got a B');
}
else if (score >= 60 && score <= 69) {
	console.log('you got a C');
}
else if (score >= 50 && score <= 59) {
	console.log('you got a D');
}
else if (score >= 0 && score <= 49) {
	console.log('you got an F');
}
else {
	console.log('you entered a wrong number');
}
