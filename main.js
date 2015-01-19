$(function() {
	$(window).keydown(function(event){
    	receivedInput(event)
	});

	$("#start-button").click(function(){
		$("#start-info").attr("style", "display:none;");
			start()
	});

  initWords();

});

function start(){
	var myVar = setInterval(function(){myTimer()},1000);

	const timeLimit = 60;
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
	inputtedValue = String.fromCharCode(e.which).toLowerCase();
	$("#myinput").html(""+inputtedValue+"")

  if(inputtedValue+"" == $("#words").text().charAt(0)) {
    $("#words").text($("#words").text().substr(1));
    var score = parseInt($("#score").text());
    score += 100;
    $("#score").text(score);
  }
  else {
    var score = parseInt($("#score").text());
    score -= 50;
    $("#score").text(score);
  }
}

function initWords() {
  var words = ["word","dude","man","banana","fruit","monkeys"];

  for(i = 0; i < words.length; i++) {
    $("#words").text($("#words").text() + " " + words[i]);
  }
}

function addWord() {
  $("#words").text($("#words").text() + " " + "random");
}
