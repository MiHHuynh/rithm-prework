var API_KEY = "f330bd6fb6b305fa62e90c5b76d9e40f";
$(document).ready(function(){
	var whichMeal;
	var ingredients;
	var searchQuery;

	$(".input-group").on("click", ".search-recipes", function(e){
		e.preventDefault();

		clearMealDivs();

		whichMeal = $("#meal-dropdown").val();
		ingredients = $("#ingredients").val();

		if (whichMeal.toLowerCase() === "give me an entire day's worth!") {
			searchQuery = ingredients.split(" ").join(",");
		} else {
			searchQuery = whichMeal + "," + ingredients.split(" ").join(",");
		}
		console.log(searchQuery);

		$.ajax({
		    method: "GET",
		    url: "http://food2fork.com/api/search",
		    data: {
		        key: API_KEY,
		        q: searchQuery
		    },
		    dataType: "json"
		}).then(function(recipesObj){
			console.log(recipesObj);
			if (recipesObj.recipes.length === 0) {
				$("#recipe-container").append("<h1>Oops! We couldn't find any recipes with " + ingredients + ". :(</h1>");
			} else {
				if (whichMeal.toLowerCase() === "breakfast") {
					addMealToUI(".breakfast", recipesObj);
					addRemoveClasses(".breakfast", "col-md-12", "col-md-4");
				} else if (whichMeal.toLowerCase() === "lunch") {
					addMealToUI(".lunch", recipesObj);
					addRemoveClasses(".lunch", "col-md-12", "col-md-4");
				} else if (whichMeal.toLowerCase() === "dinner") {
					addMealToUI(".dinner", recipesObj);	
					addRemoveClasses(".dinner", "col-md-12", "col-md-4");
				} else if (whichMeal.toLowerCase() === "give me an entire day's worth!") {
					addRemoveClasses(".breakfast", "col-md-4", "col-md-12");
					addRemoveClasses(".lunch", "col-md-4", "col-md-12");
					addRemoveClasses(".dinner", "col-md-4", "col-md-12");
					addMealToUI(".breakfast", recipesObj);
					addMealToUI(".lunch", recipesObj);
					addMealToUI(".dinner", recipesObj);						
				}
			}
		}).then(function(){
			window.scrollTo(0,document.body.scrollHeight);
		}).catch(function(error){
		    console.log(error);
		}); // end ajax block
	});
});


function addMealToUI(querySelector, recipesObj) {
	var randomIndex = Math.floor(Math.random()*30);
	var meal = querySelector.slice(1);
	console.log(meal);
	$(querySelector).append("<h3 class=\"meal-title\">" + meal + "</h3>");
	$(querySelector).append("<h4 class=\"recipe-title\">" + recipesObj.recipes[randomIndex].title + "</h4>");
	$(querySelector).append("<img src=\"" + recipesObj.recipes[randomIndex].image_url + "\" class=\"img-responsive\">");
	$(querySelector).append("<p>See recipe <a href=\"" + recipesObj.recipes[randomIndex].source_url + "\">here!</a></p>");	
}


function addRemoveClasses(querySelector, addThisClass, removeThisClass) {
	$(querySelector).addClass(addThisClass);
	$(querySelector).removeClass(removeThisClass);
}

function clearMealDivs() {
	$("#recipe-container > h1").remove();
	$(".breakfast").empty();
	$(".lunch").empty();
	$(".dinner").empty();
}
/*
object.recipes[0].image_url
object.recipes[0].title
object.recipes[0].source_url
*/