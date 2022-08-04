// Get name, legs, color, age and bark value from the dog object

const dog = {
	        name:'bingo',
	        legs: 4,
	        age: 3,
	        breed: 'german',
	        color: 'white',
	        bark: function() {
			            return 'woof woof'
			        },
	        getDogInfo: function() {
			            return `${this.name}`
			        }
}
console.log(dog.name);
