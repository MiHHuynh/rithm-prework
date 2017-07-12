// Part 1

// 1. Add the necessary code to wait for the DOM to load to make sure that anything you
// manipulate in the DOM has loaded. You can do this either using window.onload or
// adding an event listener for DOMContentLoaded.

document.addEventListener("DOMContentLoaded", function(event){
// 2. Replace the text "Change me" with "Hello World!".
	var changeheaader = document.getElementById("change_heading");
	changeheaader.innerText = "Hello World!";

// 3. When a user hovers over one of the colored boxes change the text to display the color
// that is being hovered over.
	var coloredBoxes = document.querySelectorAll("section > div");
	for (var i = 0; i < coloredBoxes.length; i++) {
		coloredBoxes[i].addEventListener("mouseover", function(event) {
			document.querySelector(".selected").innerText = event.target.className;
		});
	}

// Create a new div element.
	var newDiv = document.createElement("div");
// Give your new div a class of purple and style it so that it has a background color
// of purple.
	newDiv.classList.add("purple");
// Append your new div to the page to the section tag.
	document.querySelector("section").append(newDiv);

// Part 2

// Create a racing game with the two cars. When the race button is pressed, the two cars
// should move across the screen until one of them is at the end of the screen. When one
// of the blocks reaches the end - you should alert "winner!"

	var button = document.querySelector("button");
	var car1 = document.querySelector(".car1");
	var car2 = document.querySelector(".car2");
	car1.style.marginLeft = 0;
	car2.style.marginLeft = 0;

    function resetRace(car1timer, car2timer) {
		clearTimeout(car1timer);
		clearTimeout(car2timer);
		car1.style.marginLeft = 0;
		car2.style.marginLeft = 0;
    }

	button.addEventListener("click", function(event){
		var car1timer = setInterval(function(){
			car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random()*10 + 'px';
			if(parseInt(car1.style.marginLeft) > window.innerWidth) {
		    	alert("Car 1 is the winner!");
		    	resetRace(car1timer, car2timer);
			}
		}, 50);

		var car2timer = setInterval(function(){
			car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random()*10 + 'px';
			if(parseInt(car2.style.marginLeft) > window.innerWidth) {
				alert("Car 2 is the winner!");
				resetRace(car1timer, car2timer);
			}
		}, 50);
	});
});



