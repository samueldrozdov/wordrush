$(function() {

	start()
	$( "#input" ).keypress(function() {
	  receivedInput()
	})

});

function start(){
	var myVar = setInterval(function(){myTimer()},1000);

	const timeLimit = 4;
	var timeLeft = timeLimit;

	function myTimer() {
	    timeLeft -= 1
	    $("#timer").html(""+timeLeft+"")
	    if(0===timeLeft)
	    {
	    	clearInterval(myVar)
	    	timeOver()
	    }
	}
	function timeOver()
	{
		$("#timer").html("u ded")
	}
}

function receivedInput()
{
	$("#timer").html("nigah")
}