$(document).ready(function(){


	$("h1").mouseover(function(){
		$("h1").css("background-color", "white");
	});

	$(".h1").mouseleave(function(){
		$("h1").css("background-color", "#D5E1C8");
	});

	$(".howToPasta").on("click", function(){
		alert("Let's start");
	});

	if(hideStatus == false){
		console.log("spaghettiPic");
		$(".pasta1").show();
		$(".ingredients").hide();
		$(".directions").hide();

		hideStatus = true;
	}

	else{
		console.log("recipe");
		$(".pasta1").hide();
		$(".ingredients").show();
		$(".directions").show();

		hideStatus = false;
	}


	$(".directions").on("click", function(){
    var letsStart = confirm("Bring a large pot of salted water to a boil. Add the spaghetti and cook 8 to 10 minutes.");
    var butter = confirm("While the pasta cooks, mash the soft butter with the olive oil and cheese in a large bowl.");
    var drain = confirm("When the pasta is tender, drain it.");
    var bowl = confirm("Add the spaghetti directly to the bowl with the butter mixture.");
    var season = confirm("Season with salt and lots of freshly ground black pepper.");
	});

});

