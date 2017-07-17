// Exercises

// Write a function called printFirstAndLast which accepts an array (of objects) and console.logs
// a new string with the first character and the last character of each value.

// printFirstAndLast(['awesome','example','of','forEach']) 
// // ae
// // ee
// // of
// // fh

function printFirstAndLast(arr) {
    arr.forEach(function(val){
        console.log(val[0]+val[val.length-1]);
    });
}

// Write a function called addKeyAndValue which accepts three parameters, an array (of objects), a key and a value.
// This function should return the array of objects after each key and value have been added to each object in the array.

// addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true)
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
    var newArr = [];
    arrOfObjs.forEach(function(val){
        val[key] = value;
        newArr.push(val);
    });
    return newArr;
}

// Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each
// value multiplied by the index it is at in the array:

// valTimesIndex([1,2,3]) // [0,2,6]
// valTimesIndex([5,10,15]) // [0,10,30]

function valTimesIndex(arr) {
    return arr.map(function(val, index){
        return val*index;
    });
}

// Write a function called extractKey which accepts two parameters, an array of objects, and the name of a
// key and returns an array with just the values for that key:

// extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name")
// // ["Elie", "Tim", "Matt"]

function extractKey(arrOfObjs, key) {
    return arrOfObjs.map(function(val){
        return val[key];
    });
}

// Write a function called filterLetters which accepts an array of letters and returns the number of
// occurrences of a specific letter. This function should be case insensitive

// filterLetters(["a","a","b","c","A"], "a"); // 3
// filterLetters(["a","a","b","c","A"], "z"); // 0
// filterLetters(["a","a","b","c","A"], "B"); // 1

function filterLetters(arr, letter) {
    return arr.filter(function(val){
        return val.toLowerCase() === letter.toLowerCase();
    }).length;
}

// Write a function called filterKey which accepts two parameters, an array of objects, and the name of
// a key and returns an array with only those objects which have truthy values for that key:

// filterKey([{name: "Elie", isInstructor:true, isHilarious: false},{name: "Tim", isInstructor:true, isHilarious: true},{name: "Matt", isInstructor:true}], "isHilarious")
// // [{name: "Tim", isInstructor:true, isHilarious:true}]

function filterKey(arrOfObjs, key) {
    return arrOfObjs.filter(function(val){
        return val[key] === true;
    });
}