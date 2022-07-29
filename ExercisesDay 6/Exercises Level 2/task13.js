//An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
//
const stack = ['MongoDB', 'Express', 'React', 'Node'];
let mernStack = '';
for(let i = 0; i < stack.length;i++){
	    mernStack += stack[i][0]
}
console.log(mernStack)
