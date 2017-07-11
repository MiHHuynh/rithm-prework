// Higher Order Functions Exercises

// Write a function called map which accepts two parameters: an array and a callback.
// The map function should return a new array with the result of each value being passed
// to the callback function. Here's an example:

// map([1,2,3,4], function(val){
//     return val * 2;
// }); // [2,4,6,8]



// Write a function called reject which accepts two parameters an array and a callback.
// The function should return a new array with all of the values that do not return true
// to the callback. Here are two examples:

// reject([1,2,3,4], function(val){
//     return val > 2;
// }); // [1,2]

// reject([2,3,4,5], function(val){
//     return val % 2 === 0;
// }); // [3,5]




// Timers Exercises

// Answer the following questions:

// What is the difference between setInterval and setTimeout?


// What is the difference between using setInterval and a loop? Why would you want to choose one over the other?


// What is the first parameter that setInterval and setTimeout accept?


// Why is it so important to store the result of setInterval and setTimeout in a variable?


// What does asynchronous mean in the context of setTimeout and setInterval?

// Closures Exercises

// Answer the following questions:

// What is a closure?


// List two reasons why closures are useful


// What is a module?


// What is the arguments array-like object?


// Why do we call arguments an array-like-object?

// Write a function called createCounter. This function should contain a variable count
// that is initialized to 0. This function should return another function that when invoked,
// increments the counter by 1 and returns the count variable. You should be able to create
// multiple counters with the createCounter function and they should all have their own private
// variable called count.

// { Higher Order Functions, Timers, and Closures Exercises. }

// Write a function called countdown that accepts a number as a parameter and every 1000
// milliseconds decrements the value and console.logs it. Once the value is 0 it should
// log "DONE!" and stop.


// Write a function called randomGame that selects a random number between 0 and 1 every
// 1000 milliseconds and each time that a random number is picked, add 1 to a counter.
// If the number is greater than .75, stop the timer and return the number of tries it
// took before we found a number greater than .75.

// Write a function called isEven which takes in a number and returns true if the number
// is even and returns false if it is not

// Write a function called isOdd which takes in a number and returns true if the number
// is odd and returns false if it is not

// Write a function called isPrime which takes in a number and returns true if the number
// is a prime number (is greater than 1 and can only be divided in whole by itself and 1),
// otherwise returns false

// Write a function called numberFact which takes in a number and a callback and returns the
// result of the callback with the number passed to it

// Write a function called find. It should take in an array and a callback and return the
// first value found in the array that matches the condition.

// Write a function called findIndex. It should take in an array and a callback and return
// the index of first value found in the array that matches the condition.

// Write a function called specialMultiply which accepts two parameters. If the function
// is passed both parameters, it should return the product of the two. If the function is
// only passed one parameter - it should return a function which can later be passed another
// parameter to return the product. You will have to use closure and arguments to solve this.