$(document).ready(function(){
	// retrieve anything that has been stored in local storage
	var items = JSON.parse(localStorage.getItem("items"));
	console.log(items);

	// if it's not empty, populate the to-do list with whatever's available
	if (items !== null && items.length > 0) {
		items.forEach(function(item){
			var itemLi = $("<li id=\"" + item.id + "\">" + item.name + "</li>");
			$("#to-do-list").append(itemLi);
			if (item.completed === true) {
				$(itemLi).css("textDecoration", "line-through");
			}
			$(itemLi).append("<button class=\"deleteButton\">X</button>");
		});
	} else {
		items = [];
	}

	$("#add-item").on("click", function(event){
		// add item to HTML list
		var item = $("#item").val();
		console.log(item);

		var $toDoItem = $("<li>" + item + "</li>");
		$toDoItem.attr("id", Date());
		$("#to-do-list").append($toDoItem);
		
		// clear input field
		$("#item").val("");

		createDeleteButton($toDoItem);

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
	var $toDoList = $("#to-do-list");
	$toDoList.on("click", function(){
		if ($(event.target).is("li")) {
			$(event.target).css("textDecoration", "line-through");

			// update in items array that item is completed
			var itemID = event.target.id;
			items.forEach(function(item){
				if (item.id === itemID) {
					item.completed = true;
				}
			});
			localStorage.setItem("items", JSON.stringify(items));
			console.log(items);

		} else if ($(event.target).is(".deleteButton")) {	
			$(event.target).parent().remove();

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
	var $deleteButton = $("<button></button>");
	$deleteButton.attr("class", "deleteButton");
	$deleteButton.text("X");
	$(item).append($deleteButton);
}