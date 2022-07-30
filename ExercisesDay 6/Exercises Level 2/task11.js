// Find the longest word in the webTechs array

const webTechs = [
	  'HTML',
	  'CSS',
	  'JavaScript',
	  'React',
	  'Redux',
	  'Node',
	  'MongoDB'
]

let length = '';
let longestTech = [];
for (let i = 0; i < webTechs.length; i++) {
	        if (webTechs[i].length > length) {
			                length = webTechs[i].length;
			                longestTech = (webTechs[i]);
			        }
}
console.log(longestTech);
