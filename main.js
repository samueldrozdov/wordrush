$(function() {
	$(window).keydown(function(event){
    	receivedInput(event)
	});

	$("#start-button").click(function(){
		$("#start-info").attr("style", "display:none;");
			start()
	});
});

function start(){
  initWords();
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

function initWords()
{
  // Load Chance
  var Chance = require('chance');
  // Instantiate Chance so it can be used
  var chance = new Chance();


  var startWords = "";
  for( i = 0; i < 10; i++) {
    startWordsArray += (chance.string()+" ");
  }
  console.log(startWords);

}
