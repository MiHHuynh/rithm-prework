var boardArray;
var player1;
var player2;
var numberOfPlays = 9;

function initializeGame() {
	boardArray = [];
	player1 = {
		XorO: "X",
		currentlyPlaying: true
	};
	player2 = {
		XorO: "O",
		currentlyPlaying: false
	};
}

function isWinningState() {
	// @ @ @ | @ @ @ | @ @ @
	for (var i = 0; i < boardArray.length; i+=3) {
		if (boardArray[i] === boardArray[i+1] && boardArray[i] === boardArray[i+2] && boardArray[i] !== undefined) {
			return boardArray[i];
		}
	}

	// @ $ % | @ $ % | @ $ %
	for (var i = 0; i < boardArray.length; i++) {
		if (boardArray[i] === boardArray[i+3] && boardArray[i] === boardArray[i+6] && boardArray[i] !== undefined) {
			return boardArray[i];
		}
	}

	// @ _ $ | _ @/$ _ | $ _ @
	if (boardArray[0] === boardArray[4] && boardArray[0] === boardArray[8]  && boardArray[0] !== undefined) {
		return boardArray[0];
	}

	if (boardArray[2] === boardArray[4] && boardArray[2] === boardArray[6]  && boardArray[2] !== undefined) {
		return boardArray[2];
	}

	// if code reaches this return statement, there is no winner
	return false;
}

document.addEventListener("DOMContentLoaded", function(event){
	initializeGame();

	// show instructions when mouseover the ? in corner
	var about = document.querySelector(".about");
	var instructions = document.querySelector("ol");
	var span = document.querySelector("span");
	about.addEventListener("click", function(event){
		if (instructions.style.display === "none") {
			instructions.style.display = "block";
			span.innerText = "X";
		} else {
			instructions.style.display = "none";
			span.innerText = "?";
		}
	});

	var board = document.querySelector(".board");
	board.addEventListener("click", function(event){
		// Depending on which user is clicking the square,
		// add an X or an O into the square if it's not already filled
		if (event.target.classList.contains("square") && event.target.innerText === "") {
			var squareNumClass = event.target.classList[1];
			var squareNum = squareNumClass[squareNumClass.length-1];
			if (player1.currentlyPlaying === true) {
				event.target.innerText = player1.XorO;
				boardArray[squareNum] = player1.XorO;
			} else {
				event.target.innerText = player2.XorO;
				boardArray[squareNum] = player2.XorO;
			}
			console.log(boardArray);

			player1.currentlyPlaying = !player1.currentlyPlaying;
			player2.currentlyPlaying = !player2.currentlyPlaying;
			numberOfPlays--;

			if (numberOfPlays <= 7) {
				var isWin = isWinningState();
				if (isWin !== false) {
					alert("the winner is " + isWin);
				} else if (isWin === false && numberOfPlays === 0) {
					alert("It's a tie!");
				}
			}
		}
	});
});