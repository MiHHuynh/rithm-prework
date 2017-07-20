document.addEventListener("DOMContentLoaded", function(event){
	// retrieve anything that has been stored in local storage
	var items = JSON.parse(localStorage.getItem("items"));
	console.log(items);

	// if it's not empty, populate the to-do list with whatever's available
	if (items !== null && items.length > 0) {
		items.forEach(function(item){
			var itemLi = document.createElement("li");
			itemLi.innerText = item.name;
			itemLi.setAttribute("id", item.id);
			if (item.completed === true) {
				itemLi.style.textDecoration = "line-through";
			}
			document.getElementById("to-do-list").appendChild(itemLi);
			createDeleteButton(itemLi);
		});
	} else {
		items = [];
	}

	var addButton = document.getElementById("add-item");
	addButton.addEventListener("click", function(event) {

		// add item to HTML list
		var item = document.getElementById("item").value;
		var toDoItem = document.createElement("li");
		toDoItem.innerText = item;
		toDoItem.setAttribute("id", Date());
		document.getElementById("to-do-list").appendChild(toDoItem);
		
		// clear input field
		document.getElementById("item").value = "";

		createDeleteButton(toDoItem);

		// add item to array for localStorage
		var itemObj = {
			id: Date(),
			name: item,
			completed: false
		};
		items.push(itemObj);
		localStorage.setItem("items", JSON.stringify(items));
		console.log(items);
	});

	// strike-through list items when clicked, or remove completely if remove button is clicked
	var toDoList = document.getElementById("to-do-list");
	toDoList.addEventListener("click", function(event){
		if (event.target.tagName.toLowerCase() === "li") {
			event.target.style.textDecoration = "line-through";

			// update in items array that item is completed
			var itemID = event.target.id;
			items.forEach(function(item){
				if (item.id === itemID) {
					item.completed = true;
				}
			});
			localStorage.setItem("items", JSON.stringify(items));
			console.log(items);
		} else if (event.target.classList.contains("deleteButton")) {
			event.target.parentNode.remove();

			// remove item completely from items array
			var itemID = event.target.ID;
			var itemIndex = items.find(function(item){
				return item.id === itemID;
			});
			items.splice(itemIndex, 1);
			localStorage.setItem("items", JSON.stringify(items));
			console.log(items);
		}
	});

	// store array of item objects into localStorage
	localStorage.setItem("items", JSON.stringify(items));

});

function createDeleteButton(item) {
	// give item a delete button
	var deleteButton = document.createElement("button");
	deleteButton.setAttribute("class", "deleteButton");
	deleteButton.innerText = "X";
	item.appendChild(deleteButton);
}