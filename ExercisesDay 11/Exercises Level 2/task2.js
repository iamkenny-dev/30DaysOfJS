// Find the persons who have less than two skills


for (const {name, scores, skills, age} of users) {
	    console.log(name, scores, skills.length < 2, age)
}
