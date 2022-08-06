// Find the person who has many skills in the users object.

console.log(users.Alex.skills.length);
console.log(users.Paul.skills.length)
const entries = Object.entries(users);
console.log(entries);
console.log(entries.length);
let length = 0;
let max;
for (i = 0; i < entries.length; i++) {
	console.log(entries[i][1].skills);
	    if (entries[i][1].skills.length > length) {
		            length = entries[i][1].skills.length;
		            max = entries[i];
		        }
}
console.log(max);

for (const i in Object.entries) {
	console.log(entries[i][1].skills);
	    if (entries[i][1].skills.length > length) {
		            length = entries[i][1].skills.length;
		            max = entries[i];
		        }
}
console.log(max);
