$(document).ready(function(){
	$("form").submit(changeCity)

	// user submits a city name
	function changeCity(){
		event.preventDefault();
		var city = $("#city-type").val();
		 if (city == "New York" || city == "NYC") {
    $("body").attr("class", "nyc");

}
	// if any of these cities is selected nyc, sf, la, austin, sydney
	// background image appears
	//if user doesnt match the city and alert please enter a valid city
	//

  else if (city == "San Francisco" || city == "SF" || city == "Bay Area") {
    $("body").attr("class", "sf");
  }
  else if (city == "Los Angeles" || city == "LA" || city == "LAX") {
    $("body").attr("class", "la");
  }
  else if (city == "Austin" || city == "ATX") {
    $("body").attr("class", "austin");
  }
  else if (city == "Sydney" || city == "SYD") {
    $("body").attr("class", "sydney");
  }

else {
	alert("We currently don't have images for this city. Check back later!");}

}

});
