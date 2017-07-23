var board;
var player1;
var player2;

function initializeGame() {
	board = [[],[],[]];
	player1 = {
		XorO: "X",
		currentlyPlaying: true
	};
	player2 = {
		XorO: "O",
		currentlyPlaying: false
	};
}

document.addEventListener("DOMContentLoaded", function(event){
	initializeGame();

	// show instructions when mouseover the ? in corner
	var about = document.querySelector(".about");
	var instructions = document.querySelector("ol");
	about.addEventListener("click", function(event){
		if (instructions.style.display === "none") {
			instructions.style.display = "block";
		} else {
			instructions.style.display = "none";
		}
	});

	// player1 chooses a square
	// player1 clicks square, update board matrix, update board UI
	// check for winners or ties
	// if all good, continue
	// player2 clicks square, update board matrix, update board UI
	// check for winners or ties, etc.

	var board = document.querySelector(".board");
	board.addEventListener("click", function(event){
		if (event.target.classList.contains("square")) {
			if (player1.currentlyPlaying === true) {
				event.target.innerText = player1.XorO;
				console.log(event.target.classList[1]);
			}
			if (player2.currentlyPlaying === true) {
				event.target.innerText = player2.XorO;
			}
			player1.currentlyPlaying = !player1.currentlyPlaying;
			player2.currentlyPlaying = !player2.currentlyPlaying;
		}
	});
});