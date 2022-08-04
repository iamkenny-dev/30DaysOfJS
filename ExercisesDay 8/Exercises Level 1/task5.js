// Set new properties the dog object: breed, getDogInfo

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
