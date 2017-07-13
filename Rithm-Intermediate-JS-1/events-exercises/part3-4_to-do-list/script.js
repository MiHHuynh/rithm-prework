document.addEventListener("DOMContentLoaded", function(event){
	// retrieve anything that has been stored in local storage
	var incompleteItems = JSON.parse(localStorage.getItem("incompleteItems"));

	// if it's not empty, populate the to-do list with whatever's available
	if (incompleteItems != null && incompleteItems.length > 0) {
		for (var i = 0; i < incompleteItems.length; i++) {
			var itemDiv = document.createElement("div");
			itemDiv.innerText = incompleteItems[i];
			document.getElementById("to-do-list").appendChild(itemDiv);
		}
	} else {
		incompleteItems = [];
	}

	// retrieve and populate completed items
	var finishedItems = JSON.parse(localStorage.getItem("doneItems"));
	if (finishedItems != null && finishedItems.length > 0) {
		for (var i = 0; i < finishedItems.length; i++) {
			var doneDiv = document.createElement("div");
			doneDiv.innerText = finishedItems[i];
			document.getElementById("completed-items").appendChild(doneDiv);
		}
	} else {
		finishedItems = [];
	}

	var addButton = document.getElementById("add-item");
	addButton.addEventListener("click", function(event) {
		// add item to HTML list
		var item = document.getElementById("item").value;
		var toDoItem = document.createElement("div");
		toDoItem.innerText = item;
		toDoItem.setAttribute("class", "incomplete-item");
		document.getElementById("to-do-list").appendChild(toDoItem);
		
		// give item a delete button
		var deleteButton = document.createElement("button");
		deleteButton.setAttribute("class", "deleteButton");
		deleteButton.innerText = "Done?";
		toDoItem.appendChild(deleteButton);

		// clear input field
		document.getElementById("item").value = "";

		// add item to array for localStorage
		incompleteItems.push(item);
		localStorage.setItem("incompleteItems", JSON.stringify(incompleteItems));

	});

	// strike-through list items when clicked, or remove completely if remove button is clicked
	document.querySelector("body").addEventListener("click", function(event){
		if (event.target.classList.contains("incomplete-item")) {
			event.target.style.textDecoration = "line-through";
		} else if (event.target.classList.contains("deleteButton")) {
			event.target.previousSibling.remove();
			event.target.remove();
		}
	});

// need to update incomplete or complete lists, repopulate with proper formatting
// e.g. line through or not

});

function appendDeleteButton() {

};