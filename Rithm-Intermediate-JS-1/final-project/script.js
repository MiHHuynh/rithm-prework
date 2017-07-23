function initializeGame() {

}

var board = [[],[],[]];

var player1;
var player2;

document.addEventListener("DOMContentLoaded", function(event){
	console.log('hello');
});


/*
Play Button
New game: computer randomizes who gets X. X always goes first

var xorO = [X, O];

computer = 
{
	XorO: X/O,
	playsFirst: false/true,
	numberOfTurns: 1-5,
	currentlyPlaying: false/true
}

user = 
{	
	XorO: X/O,
	playsFirst: false/true,
	numberOfTurns: 1-5,
	currentlyPlaying: false/true
}

var available squares [1,2,3,4,5,6,7,8,9]
x squares = [...]
o squares = [...]

check for wins
123
456
789
147
258
369
159

if user.currentlyPlaying is false
	math.random() to pick a number from 0 to availableSquares.length-1
	to pick one of the unoccupied squares
	take that number and loop through divs to find the one to occupy

Player clicks. Square shows X or O depending on what they're
playing
Computer goes.
Continue until there are no more spaces
Search for any three in a row
Print winner + loser, or tie
Replay? Button


*/