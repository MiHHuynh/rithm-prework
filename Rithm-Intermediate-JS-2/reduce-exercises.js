// Exercises
// Write a function called extractKey which accepts two parameters, an array of objects, and the name of a key and
// returns an array with just the values for that key:

// extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name");
// // ["Elie", "Tim", "Matt"]

function extractKey(arrOfObjs, key) {
	arrOfObjs.reduce(function(acc, next){
		acc.push(next[key]);
		return acc;
	},[]);
}

// Write a function called filterLetters which accepts an array of letters and returns the number of occurrences of a
// specific letter. This function should be case insensitive

// filterLetters(["a","a","b","c","A"], "a"); // 3
// filterLetters(["a","a","b","c","A"], "z"); // 0
// filterLetters(["a","a","b","c","A"], "B"); // 1

function filterLetters(arr, letter) {
	arr.reduce(function(acc, next){
		if next.toLowerCase() === letter.toLowerCase() {
			acc++;
		}
		return acc;
	},0);
}

// Optional Bonus
// Write a function called addKeyAndValue which accepts three parameters, an array (of objects), a key and a value.
// This function should return the array of objects after each key and value has been added. You can do this a few
// ways, either by reducing starting with an empty array and making copies of the object or by starting with the actual array!

// addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true);
// /*
// [
//     {
//         name: 'Elie',
//         isInstructor: true
//     },
//     {
//         name: 'Tim',
//         isInstructor: true
//     },
//     {
//         name: 'Elie',
//         isInstructor: true
//     }
// ]
// */

function addKeyAndValue(arrOfObjs, key, value) {
	arrOfObjs.reduce(function(acc, next, index){
		acc[index][key] = value;
		return acc;
	}, arrOfObjs);
}