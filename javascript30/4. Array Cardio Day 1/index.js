const inventors = [
	{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
	{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
	{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
	{ first: 'Johannes', last: 'Kepler', year:1571, passed: 1630 },
	{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
	{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
	{ first: 'Max', last: 'Planck', year: 1858, passed: 1947}
];

const people = [
	'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick',
	'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire',
	'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
	'Benjamin, Walter', 'Benn Tony', 'Bennington, Chester', 'Benson, Leana',
	'Bent, Silas', 'Bentsen Lloyd', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra',
	'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Anerurin'
];

// 1. Array.prototype.filter
console.log("1. filter the list of inventors for thos who were born in th 1500's");
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
console.log('result', fifteen);

// 2. Array.prototype.map
console.log("2. Give us an array of inventory first and last name");
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log('result', fullNames);

// 3. Array.prototype.sort - sort is applied to original array!!!
console.log("3. Sort inventors by birthdate oldest -> youngest");
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.log('result', ordered);

// 4. Array.prototype.reduce
console.log("4. How many years did all the inventors live");
const totalYears = inventors.reduce((total, inventor) => {
	return total + (inventor.passed - inventor.year);
}, 0);
console.log('result', totalYears);

// 5. Sort exercise
console.log("5. Sort the inventors by years lives");
const ages = inventors.sort((a, b) => (a.passed - a.year) > (b.passed - b.year) ? -1 : 1);
console.log('result', ages);

// 6. Filter exercise
console.log("6. create a list of boulevards in Paris that contain 'de' anywhere in name");
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const category = document.querySelector(".mw-category");
const links = Array.from(category.querySelectorAll("a"));
const de = links.map(link => link.textContent)
		.filter(streetName => streetName.includes("de"));
console.log('result', de);


// 7. sort exercise
console.log("7. Sort the people alphabetically by last name");
const alpha = people.sort((lastOne, nextOne) => {
	const [aLast, aFirst] = lastOne.split(', ');
	const [bLast, bFirst] = nextOne.split(', ');
	return aLast > bLast ? 1 : -1;
})
console.log('result', alpha);



// 8. reduce exercise
console.log("8. Sum up the instances of each of these");
const data = ['car', 'car', 'truck', 'truck', 'truck', 'bike', 'bike', 'walk', 'walk', 'van'];
const transportation = data.reduce((obj, item) => {
	obj[item] = (obj[item] || 0) + 1;
	return obj;
}, {});
console.log('result', transportation);

