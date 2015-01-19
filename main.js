$(function() {

	$(window).keydown(function(event){
    	receivedInput(event)
	});

	$("#start-button").click(function(){
		$("#start-info").attr("style", "display:none;");
			start()
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
		$("#start-info").attr("style", "");
	}
}

function receivedInput(e)
{
	inputtedValue = String.fromCharCode(e.which)
	$("#myinput").html(""+inputtedValue+"")
}