$(document).ready(function(){

console.log("letsago!")

var topics = ["paris", "dubai", "tokyo", "dallas", "madrid", "london", "rome", "chicago"]

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
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + cityName + "&api_key=dc6zaTOxFJmzC&limit=10&rating=g";

        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          console.log(response);
        });
      



});










});