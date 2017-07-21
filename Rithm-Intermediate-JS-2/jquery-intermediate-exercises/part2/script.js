$(document).ready(function(){
	$("#add-item").on("click", function(event){
		event.preventDefault();
		var food = $("#food-field").val();
		var rating = $("#rating-field").val();

		// add a new row with the food, rating, and button to table
		var $row = $("<tr><td>" + food + "</td><td>" + rating + "</td><td><button class=\"btn btn-danger delete-row\">Delete</button></td></tr>")
		$("tbody").append($row);
		resetFields();
	});

	// when delete button is pressed, remove row
	var $deleteRowButton = $(".delete-row");
	$("table").on("click", $deleteRowButton, function(event){
		$(event.target).parent().prevAll().parent().remove();
	});
	// why does ^ work but not $(".delete-row").on("click", function(){}); ?
});

function resetFields() {
	$("#food-field").val("");
	$("#rating-field").val("");
}