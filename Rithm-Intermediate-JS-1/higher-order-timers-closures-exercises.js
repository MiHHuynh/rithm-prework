// Higher Order Functions Exercises

// Write a function called map which accepts two parameters: an array and a callback.
// The map function should return a new array with the result of each value being passed
// to the callback function.

function map(arr, fn) {
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		result.push(fn(arr[i]));
	}
	return result;
}

// Write a function called reject which accepts two parameters an array and a callback.
// The function should return a new array with all of the values that do not return true
// to the callback.

function reject (arr, fn) {
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		if(fn(arr[i]) === false) {
			result.push(arr[i]);
		}
	}
	return result;
}

// Timers Exercises

// Answer the following questions:

// What is the difference between setInterval and setTimeout?

console.log("setInterval runs callback functions every set interval (as the name suggests!) for an infinite amount of times until we clear the interval. setTimeout runbs callback functions once after the set timer runs out.");

// What is the difference between using setInterval and a loop? Why would you want to choose one over the other?

console.log("setInterval runs the callback function every set amount of time (every interval). Loops run continuously until the condition is no longer met. Depending on how much code needs to be run for each loop, this can sometimes seem instantaneous and continuous (computers are fast). If you want to run a block of code at a specific time interval, setInterval is a better choice.");

// What is the first parameter that setInterval and setTimeout accept?

console.log("The first parameter for both sets is a callback function.");

// Why is it so important to store the result of setInterval and setTimeout in a variable?

console.log("It is important to store the result of setInterval and setTimeout in a variable because you would need the result in order to clear the timer. Storing it in a variable makes the result more easily accessible.");

// What does asynchronous mean in the context of setTimeout and setInterval?

console.log("In the context of sets, asynchronous means they are stored to run later after the set time.");

//_________

// Closures Exercises

// Answer the following questions:

// What is a closure?

console.log("A closure is the combination of a function and the lexical environment within which that function was declared. It is a function with context.");

// List two reasons why closures are useful

console.log("2 reasons why closures are useful: 1) you can make \"private\" variables that cannot be accessed by anything other than the function in the closure. 2) closures allow for grouping of things that have an underlying context/usage, like packaging things that are related to each other.");

// What is a module?

console.log("A module is a piece of code that is encapsulated to be reused easily. It is a great way to wrap everything in an IIFE that contains private data that can't be accessed globally.");

// What is the arguments array-like object?

console.log("The arguments array-like object is a list of arguments. The function gives a special keyword to access all the arguments at once as an array-like list.");

// Why do we call arguments an array-like-object?

console.log("It is array-like because you cannot add or remove from it, but it does have a length property.");

// Write a function called createCounter. This function should contain a variable count
// that is initialized to 0. This function should return another function that when invoked,
// increments the counter by 1 and returns the count variable. You should be able to create
// multiple counters with the createCounter function and they should all have their own private
// variable called count.

function createCounter() {
	var count = 0;
	return function increment() {
		return ++count;
	}
}

// { Higher Order Functions, Timers, and Closures Exercises. }

// Write a function called countdown that accepts a number as a parameter and every 1000
// milliseconds decrements the value and console.logs it. Once the value is 0 it should
// log "DONE!" and stop.

function countdown(num) {
	var timerID = setInterval(function() {
		num--;
		if (num <= 0) {
			clearInterval(timerID);
			console.log("DONE");
		} else {
			console.log(num);
			num--;
		}
	}, 1000);
}

// Write a function called randomGame that selects a random number between 0 and 1 every
// 1000 milliseconds and each time that a random number is picked, add 1 to a counter.
// If the number is greater than .75, stop the timer and return the number of tries it
// took before we found a number greater than .75.

function randomGame() {
	var num;
	var count = 0;
	var timerID = setInterval(function() {
		num = Math.random();
		count++;
		if (num > .75) {
			clearInterval(timerID);
			return count;
		}
	}, 1000);
}

// Write a function called isEven which takes in a number and returns true if the number
// is even and returns false if it is not

function isEven(num) {
	return num % 2 === 0;
}

// Write a function called isOdd which takes in a number and returns true if the number
// is odd and returns false if it is not

function isOdd(num) {
	return num % 2 !== 0;
}

// Write a function called isPrime which takes in a number and returns true if the number
// is a prime number (is greater than 1 and can only be divided in whole by itself and 1),
// otherwise returns false

function isPrime(num) {
	// factors of a number are symmetrical, with the middle point being the square root
	// for example, if we were to try to find the factors of 36:
	// 1 x 36
	// 2 x 18
	// 3 x 12
	// 4 x 9
	// 6 x 6
	// 9 x 4 <-- starts repeating factors already listed
	for (var i = 2; i <= Math.sqrt(num); i++) {
		if(num % i === 0) {
			return false;
		}
	}
	return num > 1; // have to check that the number is not 1
}

// Write a function called numberFact which takes in a number and a callback and returns the
// result of the callback with the number passed to it

function numberFace(num, fn) {
	return fn(num);
}

// Write a function called find. It should take in an array and a callback and return the
// first value found in the array that matches the condition.

function find(arr, fn) {
	for (var i = 0; i < arr.length; i++) {
		if (fn(arr[i]) === true) {
			return arr[i];
		}
	}
}

// Write a function called findIndex. It should take in an array and a callback and return
// the index of first value found in the array that matches the condition.

function findIndex (arr, fn) {
	for (var i = 0 ; i < arr.length; i++) {
		if (fn(arr[i])) {
			return i;
		}
	}
}

// Write a function called specialMultiply which accepts two parameters. If the function
// is passed both parameters, it should return the product of the two. If the function is
// only passed one parameter - it should return a function which can later be passed another
// parameter to return the product. You will have to use closure and arguments to solve this.

function specialMultiply (a, b) {
	// if there is only one argument, return a function that always multiplies a number by that one given argument
	if (arguments.length === 1) {
		return function(b) {
			return a*b;
		}
	}
	// otherwise just multiply
	return a*b;
}