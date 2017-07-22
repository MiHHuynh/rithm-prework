var API_KEY = '25d7831613ab49c3a807601617655ca9';

$(document).ready(function(){
	$(".search-gifs").on("click", function(e){
		var searchQuery = $(".search-input").val();
		var imageURL;

		$.ajax({
		    method: "GET",
		    url: "http://api.giphy.com/v1/gifs/search",
		    data: {
		        // a key of q and a value of cat which will look like ?q=cat
		        q: searchQuery,
		        limit: 10,
		        api_key: API_KEY
		    },
		    dataType: "json"
			}).then(function(response){
				var randomIndex = Math.floor(Math.random() * (response.data.length));
			    console.log(response.data[randomIndex].images.fixed_height.url);
			    imageURL = response.data[randomIndex].images.fixed_height.url;
			    $(".gif-bucket").append("<img src=\"" + imageURL + "\">");
			}).catch(function(error){
			    console.log(error);
			});
		$(".search-input").val("");

	}); // end on click of search gifs button


	$(".clear-gifs").on("click", function(e) {
		$(".gif-bucket").empty();
	});

}); // end doc ready



