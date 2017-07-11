// Exercises

// Given the following array, write a function called printEvens that console.logs all of the even numbers
var nestedArr = [[1,2,3],[4,5,6],[7,8],[9,10,11,12]];

function printEvens(arr) {
	for (var i = 0; i < nestedArr.length; i++) {
		for (var j = 0; j < nestedArr[i].length; j++) {
			if (nestedArr[i][j] % 2 === 0) {
				console.log(nestedArr[i][j]);
			}
		}
	}
}

// Given the following array, write a function called sumTotal returns the sum of all numbers in the array
var nestedArr = [[[1,2],[3,4]],[[5,6]]];

function sumTotal() {
	var sum = 0;
	for (var i = 0; i < nestedArr.length; i++) {
		for (var j = 0; j < nestedArr[i].length; j++) {
			for (var k = 0; k < nestedArr[i][j].length; k++) {
				sum += nestedArr[i][j][k];
			}
		}
	}
	return sum;
}

// Given the following array, write a function called countVowels, which returns the count of
// all of the vowels in each string regardless of case. To see if a value is an array, you can
// not use typeof since that will return 'object', so one way to do this is by using the Array.isArray function.

// var nestedArr = ['Elie', ['Matt', ['Tim']],['Colt',['Whisky',['Janey'], 'Tom']], 'Lorien'];
// reformatted to show structure visually
var nestedArr = ['Elie', 
				[   'Matt', 
				    ['Tim']
				],
				[   'Colt',
				   [   'Whisky',
				       ['Janey'], 
				       'Tom'
				   ]
				], 
				'Lorien'];

function countVowels(arr) {
	var count = 0;
	for (var i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			count += countVowels(arr[i]);
		} else {
			var word = arr[i];
			for (var j = 0; j < word.length; j++) {
				if (word[j].toString().toLowerCase() === 'a' || word[j].toString().toLowerCase() === 'e' || 
					word[j].toString().toLowerCase() === 'i' || word[j].toString().toLowerCase() === 'o' || 
					word[j].toString().toLowerCase() === 'u') {
					count++;
					// console.log(word[j]);
					// console.log(count);
				}
			}
		}
	}
	return count;
}

//__________

// { Nested Arrays Exercises. }

// Write a function called rotate which takes an array and a number, and moves each
// element however many spaces the number is to the right. For the value at the end of
// the array, rotate should move it back to the beginning.
// rotate([1,2,3], 1) // [3,1,2]
// rotate([1,2,3], 2) // [2,3,1]
// rotate([1,2,3], 3) // [1,2,3]

function rotate(arr, num) {
	for (var i = 0; i < num; i++) {
		arr.unshift(arr.pop());
	}
	return arr;
}

// Write a function called makeXOGrid which takes in two parameters, rows and columns,
// and returns an array of arrays with the number of values in each subarray equal to
// the columns parameter and the number of subarrays equal to the rows parameter. The
// values in the sub-arrays should switch between "X" and "O".
/*
makeXOGrid(1,4) 
[["X","O","X","O"]]

makeXOGrid(3,2) 
[["X","O"],["X","O"],["X","O"]]

makeXOGrid(3,3) 
[["X","O","X"],["O","X","O"],["X","O","X"]]
*/

function makeXOGrid(rows, columns) {
	var grid = [];
	var isX = true;
	for (var i = 0; i < rows; i++) {
		grid.push([]);
		for (var j = 0; j < columns; j++) {
			if (isX) {
				grid[i].push("X");
			} else {
				grid[i].push("O");
			}
			isX = !isX;
		}
	}
	return grid;
}