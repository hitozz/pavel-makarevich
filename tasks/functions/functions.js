/**
 * write function that adds two numbers
 *
 */
function add(a, b) {
	return (a + b);
}

const result = add(1,2);
console.log(result);
console.log(add(-1,-2));

/**
 * write function that return first and last name of given object
 * properties firstName and lastName
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 * }
 */
const person = {firstName: "John", lastName: "Dou"};

function getFullName(object) {
	return (object.firstName + " " + object.lastName);
}
person.fullName =`${person.firstName} ${person.lastName}`;
console.log(person.fullName);

/**
 * write fuction that checks is number is odd
 * true if odd, false if even
 */
function isOdd(n) {
	return (n % 2 === 0)? false : true;
}

/**
 * write function that return shortest of words in given array
 * e.g ["one", "two", "three"] should return one
 */
function getShortest(wordArray) {
	let result = wordArray[0];
	for (let i = 1; i < wordArray.length; i++) {
		const x = wordArray[i];
		result = (result.length > x.length) ? x : result;
	}
	return result;
}

/**
 * write function that returns word google with given numbers of "o" symbols
 * e.g getGoogle(5) should return "gooooogle"
 */
function getGoogle(n) {
	const o = "o";
	return `g${o.repeat(n)}gle`;
}
console.log(getGoogle(5));

/**
 * write function that returns object based on given information (params may be null)
 * getUser("John", "Dou", 42) should return
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 *    age: 42
 * }
 */
function getUser(firstName, lastName, age) {
	return {
		"firstName": firstName,
		"lastName": lastName,
		"age": age
	};
}

/**
 * write function that calculates total path traveled.
 * path represended as array of objects with field distance and direction
 * e.g [{direction: "Kiyv - Minsk", distance: 567}, {direction: "Kiyv - Paris", distance: 2402}]
 */

function getTotalPath(path) {
	let totalPath = 0;
	for (const object of path) {
		totalPath += object.distance;
	}
	return totalPath;
}

/**
 * write a function that will calculate a discount considering the Amount
 * and the percentage (hint: you need to use the Closure here)
 * @param {amount} num 
 * @param {percentage} num 
 */

function discountFunction(amount) {
	const discountRate = percentage / 100;
	return function (amount) {
      return (1 - discountRate) * amount;
	}
}

/**
 * Write the methods inside the given objects that:
 * 1. console logs keys of the given object
 * 2. returns the string 'My name is John Doe and I am 25 years old. My best friend is Daniel'
 * reffering to the data stored in the object
 */

const myObject = {
	name: 'John',
	lastName: 'Doe',
	age: 25,
	friends: ['Mike', 'Alan', 'Daniel'],
	keys() {
		//write your code here
	},
	call() {
		//write your code here
	}

};

module.exports = {
	add,
	getFullName,
	isOdd,
	getShortest,
	getGoogle,
	getUser,
	getTotalPath,
	discountFunction,
	myObject
};