const people = [
	{ name: 'Wes', year: 1988 },
	{ name: 'Kait', year: 1986 },
	{ name: 'Irv', year: 1970 },
	{ name: 'Lux', year: 2015 }
];

const comments = [
	{ text: 'Love this', id: 523423 },
	{ text: 'Super good', id: 823423 },
	{ text: 'you are the best', id: 2039842 },
	{ text: 'Ramen in my fav food over', id: 123523 },
	{ text: 'Nice, Nice, Nice!', id: 542328 }
];


// 1. Array.prototype.some
console.log("1. Atleast one person 19?");
const isAdult = people.some(person => (new Date()).getFullYear() - person.year >= 19);
console.log('result', isAdult);

// 2. Array.prototype.every
console.log("2. Everyone 19?");
const allAdult = people.every(person => (new Date()).getFullYear() - person.year >= 19);
console.log('result', allAdult);

// 3. Array.prototype.find
console.log("3. Get atleast 1 which fit to condition (like filter but 1 result)");
const comment = comments.find(comment => comment.id == 823423);
console.log('result', comment);

// 4. Array.prototype.findIndex
console.log("4. Get value index in array");
const index = comments.findIndex(comment => comment.id == 823423);
console.log('result', index);

// 5. Array.prototype.splice
console.log("5. spread and slice/splice");
// comments.splice(index, 1);
const newComments = [
	...comments.slice(0, index),
	...comments.slice(index + 1)
];
console.log('result', newComments);
