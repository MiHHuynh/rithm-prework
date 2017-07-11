// { Function Basics. }

/* Write a function called myName that logs your full name. 
Save your full name to a variable inside of the function body, 
then use console.log to print your name to the console. */

function myName() {
	var name = "Michelle Huynh";
	console.log(name);
}

//Create an array called favoriteFoods which contains the strings "pizza" and "ice cream".

var favoriteFoods = ["pizza", "ice cream"];

/* Write a function called randomFood. The function should use 
Math.random to randomly choose a favorite food in your favoriteFoods 
array to return. For example, your function will return either pizza 
or ice cream, depending on what you get back from Math.random. */

function randomFood() {
	var i = Math.floor(Math.random() * favoriteFoods.length);
	return favoriteFoods[i];
}

//Create a variable called numbers which is an array that contains the numbers 1 through 10.

var numbers = [1,2,3,4,5,6,7,8,9,10];

//Write a function called displayOddNumbers which iterates over the numbers 
//array and console.logs out all of the numbers that are odd.

function displayOddNumber() {
	for (var i = 0; i < numbers.length; i++) {
		if (numbers[i] % 2 != 0) {
			console.log(numbers[i]);
		}
	}
}

//Write a function called displayEvenNumbers which iterates over the numbers 
//array and console.logs out all of the numbers that are even.

function displayEvenNumbers() {
	for (var i = 0; i < numbers.length; i++) {
		if (numbers[i] % 2 === 0) {
			console.log(numbers[i]);
		}
	}
}

//Create a function called returnFirstOddNumber which iterates over the numbers array and returns the first odd number it finds

function returnFirstOddNumber() {
	for (var i = 0; i < numbers.legnth; i++) {
		if (numbers[i] % 2 != 0) {
			return numbers[i];
		}
	}
}

//Create a function called returnFirstEvenNumber which iterates over the numbers array and returns the first even number it finds

function returnFirstEvenNumber() {
	for (var i = 0; i < numbers.legnth; i++) {
		if (numbers[i] % 2 === 0) {
			return numbers[i];
		}
	}
}

//Create a function called returnFirstHalf which returns the first half of the numbers array

function returnFirstHalf() {
	return numbers.slice(0, numbers.length/2);
}

//Create a function called returnSecondHalf which returns the second half of the numbers array

function returnSecondHalf() {
	return numbers.slice(numbers.length/2);
}

/*-----------*/

// { Function Parameters and Scope. }

/*
Make a function for add, subtract, multiply, and divide. Each of these functions should accept 
two parameters and return the sum, difference, product and quotient.
*/

function add(a, b) { return a+b; }
function subtract(a, b) { return a-b; }
function multiply(a, b) { return a*b; }
function divide(a, b) { return a/b; }

/*
Write a function called sayHello that takes in a string as a parameter. If the parameter
passed to the function is your first name, it should return "Hello Boss", but if the parameter
passed to the function is any other name, it should return the string "Hello" and the name parameter.
*/

function sayHello(name) {
	if (name === "Michelle") {
		return "Hello Boss";
	} else {
		return "Hello " + name;
	}
}

/*
Write a function called average which accepts an array as a parameter. The function should return
the average of all of the numbers in the array (you can assume that the array passed to the
function will contain only numbers)
*/

function average(numbers) {
	var sum;
	for (var i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	return sum/numbers.length;
}

/*
Write a function called createStudent, which accepts two parameters both of which are strings.
The function should return an object with the keys firstName and lastName and the values should
be each of them
*/

function createStudent(first, last) {
	return {
		firstName: first,
		lastName: last
	};
}

/*
Using your createStudent function, create three students and save them each in a variable.
Then create a variable called students, which is an array that will store your three students
*/

var bob = createStudent("Bob", "Billy");
var tom = createStudent("Tom", "Cat");
var nancy = createStudent("Nancy", "Mulligan");
var students = [bob, tom, nancy];

/*
Write a function called findStudentByFirstName, which accepts one parameter, a string. This
function should iterate through the students array you just made and if the parameter passed
to the function is the same as one of the first name's of the students, the function should
return true. Otherwise it should return false. This function should be case insensitive so
that you can search successfully regardless of capitalization
*/

function findStudentByFirstName(name) {
	for (var i = 0; i < students.length; i++) {
		var lowerCasedName = name.toLowerCase();
		if (lowerCasedName === students[i].firstName.toLowerCase()) {
			return true;
		}
	}
	return false;
}

/*
Write a function called extractEveryThird which accepts an array as a parameter. The function
should iterate over the array and return a new array with every 3rd element in the array
passed to the function.
*/

function extractEveryThird(arr) {
	var newArr = [];
	for (var i = 0; i < arr. length; i++) {
		newArr.push(arr[i]);
	}
	return newArr;
}

/*
Write a function called countEvensAndOdds which accepts an array as a parameter. This function
should return an object with the count of even numbers and the count of odd numbers. The object
returned should have the keys oddCount and evenCount.
*/

function countEvensAndOdds(arr) {
	var count = {
		oddCount: 0,
		evenCount: 0
	};
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			count.evenCount += 1;
		} else {
			count.oddCount += 1;
		}
	}
	return count;
}

/*
In the following example, what will be printed in the console? Make sure you first try read
this code before pasting it into the console :)

var myVar = "Hello from global";

function scopePractice() {
   var myVar = "Hello from function scope";
}

scopePractice();
console.log(myVar);

var tricky = "Hello from global";

function trickyScopePractice() {
    tricky = "Hello from function scope";
}

console.log(tricky);
*/

console.log("\"Hello from global\" would be printed because the function was not called. Thus, the variable tricky was never modified.");

/*
Write a function called onlyCapitalLetters which accepts a string and returns a new string with
only the capital letters passed to the string.
*/

function onlyCapitalLetters(aString) {
	var capitalLetters = "";
	for (var i = 0; i < aString.length; i++) {
		if ((aString[i] === aString[i].toUpperCase()) (&& != " ")) {
			capitalLetters += aString[i];
		}
	}
	return capitalLetters;
}

/*-----------*/

// { Anonymous Functions and IIFEs. }

/* Write a function called displayFullName, which should accept two parameters, 
firstName and lastName. The function should be immediately invoked and return 
the firstName + lastName. You should NOT have to call this function, it should invoke right away. */

(function displayFullName(firstName, lastName) {
	return firstName + " " + lastName;
})();

/*
Write a function called createCalculator, which should return an object that has 
four methods, add, subtract, multiply and divide.

var calc = createCalculator();
calc.add(20,20); // 40
calc.subtract(2,2); // 0
calc.multiply(2,2); // 4
calc.divide(12,2); // 6
*/

function createCalculator() {
	return {
		add: function(x, y) {
			return x + y;
		},
		subtract: function(x, y) {
			return x - y;
		},
		multiply: function(x, y) {
			return x * y;
		},
		divide: function(x, y) {
			return x / y;
		}
	}
}

var calc1 = createCalculator();
calc1.add(1,2); //3

/*-----------*/

// { Hoisting. }

/*
Exercises
What does the following code output? Why?

var firstName = 'Elie';

function displayFirstName(){
    var firstName = 'Tim';
    return firstName;
}

displayFirstName(); // ?
*/

console.log("The above code should output \"Tim\" because the return is within the same scope and directly under the assignment of \'Tim\' to firstName.");

/*
What does the following code output? Why?

function displayFirstName(){
    var firstName = 'Tim';
    return firstName;
}

displayFirstName();
console.log(firstName) // ?
*/

console.log("The above code should output undefined. The console.log is trying to access a variable that was defined only within the scope of the function displayFirstName.");

/*
What does the following code output? Why?

console.log(firstName) // ?
var firstName = "Elie"
*/

console.log("The following code outputs undefined due to hoisting. firstName only becomes \"Elie\" after the console.log.");

/*
What does the following code output? Why?

console.log(firstName) // ?
firstName = 'Elie'
*/

console.log("The following code outputs a ReferenceError. Without the var keyword, variables do not get hoisted, thus making the firstName variable nonexistent at the time that it is used.");

/*
What does the following code output? Why?

function sayHi(){
    return 'Hi ' + firstName;
    var firstName = 'Elie'
}

sayHi(); // ?
*/

console.log("The following code outputs \"Hiundefined\" due to hoisting. firstName will be hoisted to the top of its scope and won't be assigned until after the return.");

/*
What does the following code output? Why?

function sayHi(){
    return 'Hi ' + firstName; 
    firstName = 'Elie'
}

sayHi(); // ?
*/

console.log("The code should output a ReferenceError. firstName is declared without the var keyword, so it does not get hoisted, and thus is nonexistent at the time it is used in the return statement.");

/*
What does the following code output? Why?

sayHi() // ?

function sayHi(){
    return 'Hi!';
}
*/

console.log("This should output \'Hi!\' because functions are always hoisted.");

/*
What does the following code output? Why?

sayHi() // ?

var sayHi = function(){
    return 'Hi!';
}
*/

console.log("This should output a TypeError. sayHi is hoisted and initiated with the value of undefined. At the time that it is invoked like a function, it is currently undefined, which cannot be called like a function.");

/*-----------*/

// { Functions Exercises. }

// this function takes in two parameters and returns the difference of the two

// this function takes in two parameters and returns the product of the two

// this function takes in one parameter (a number from 1-7) and returns the day of the week
// (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7,
// the function should return undefined;

// this function takes in one parameter (an array) and returns the last value in the array. 
// It should return undefined if the array is empty.

// this function takes in two parameters (both numbers). If the first is greater than the second, 
// this function returns "First is greater". If the second number is greater than the first, the 
// function returns "Second is greater". Otherwise the function returns "Numbers are equal"

// this function takes in two parameters (two strings). The first parameter should be a word 
// and the second should be a letter. The function returns the number of times that letter appears
// in the word. The function should be case insensitive (does not matter if the input is lowercase
// or uppercase). If the letter is not found in the word, the function should return 0.

// this function takes in one parameter (a string) and returns an object with the keys being the
// letters and the values being the count of the letter.

// this function should take in at most four parameters (an array, command, location, and value).
// If the command is "remove" and the location is "end", the function should remove the last
// value in the array and return the value removed. (In this case, the function only needs three arguments.)
// If the command is "remove" and the location is "beginning", the function should remove the
// first value in the array and return the value removed. (In this case, the function only needs three arguments.)
// If the command is "add" and the location is "beginning", the function should add the value
// (fourth parameter) to the beginning of the array and return the array.
// If the command is "add" and the location is "end", the function should add the value
// (fourth parameter) to the end of the array and return the array.

// A Palindrome is a word, phrase, number, or other sequence of characters which reads the same
// backward or forward. This function should take in one parameter and returns true or false if it
// is a palindrome. As a bonus, allow your function to ignore whitespace and capitalization so that
// isPalindrome('a man a plan a canal Panama'); returns true

// using your knowledge so far, build a game of Rock/Paper/Scissor where through the use of the prompt
// function, a user can enter their choice and based on a random selection - they can either tie/win or lose
// against a computer.









