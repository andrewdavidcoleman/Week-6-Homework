$(document).ready(function(){

console.log("letsago!")

var topics = ["paris", "dubai", "tokyo", "madrid", "london", "rome", "chicago"]

/*objective 1: I need to create a function that dynamically creates a button for each item in my topics array
and insert the buttons into the HTML*/
	for (var i = 0; i < topics.length; i++) {
		var cityButtons = $("<button value=" + topics[i] + ">" + topics[i] + "</button>");
		$("#buttons-div").append(cityButtons);
	}
// objective 1 completed!

/*objective 2: I need to make it so when a user clicks one of the buttons, it calls the Giphy API*/
$("button").click(function(){
	var cityName = ($(this).val());
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + cityName + "&api_key=dc6zaTOxFJmzC&limit=10&rating=pg";
	$("#gif-div").empty();
        $.ajax({
          url: queryURL,
          method: "GET"
// objective 2 complete!
/*Objective 3: I need to gather the information from that response and select gif with the value
of the button clicked*/
        }).done(function(response) {
          console.log(response);
          var results = response.data;
          for (var i = 0; i < results.length; i++) {
          	var gifDiv = $("<div class='dynamic-div'>");
          	var rating = $("<p>").text("Rating: " + results[i].rating);
          	var gifImage = $("<img>");
          	gifImage.attr("src", results[i].images.fixed_height_small.url);
          	gifDiv.append(rating);
            gifDiv.append(gifImage);
            $("#gif-div").prepend(gifDiv);
          }
        });
      



});










});