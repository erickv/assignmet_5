$(document).ready(function(){
	$("#submit-btn").click("changeCity")
	
 // user inputs text 

	function changeCity(){
		var city = $("#city-type").val();
		 if (city == "New York" || city == "NYC") {
    $("body").attr("class", "nyc");
}

// if any of cities of list are submitted it, background will change to reflect that

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

// if a submitted city is not in list it will give an alert "please submit other city"

else {
	alert("We currently don't have images for this city. Check back later!");}

}

});

