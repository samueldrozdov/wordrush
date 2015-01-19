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

  var score = 0;
  var playing = false;
  var previousScores = [];

  const timeLimit = 2;


function start(){
	playing = true;
	score = 0;
	$("#score").text(score);
	var myVar = setInterval(function(){myTimer()},1000);


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
		playing = false;
		previousScores.push(score);
		$("#start-info").attr("style", "");
		$("#previous-scores").html(""+previousScores+"")
	}
}

function receivedInput(e)
{
	if(playing)
	{
			inputtedValue = String.fromCharCode(e.which).toLowerCase();
			$("#myinput").html(""+inputtedValue+"")

		  if(inputtedValue+"" == $("#words").text().charAt(0)) {
		    $("#words").text($("#words").text().substr(1));

		    score += 100;
		    $("#score").text(score);
		  }
		  else {

		    score -= 50;
		    $("#score").text(score);
		  }

		  if($("#words").text().length < 30) {
		    addWord();
		  }
	}
}

function initWords() {
  var words = [chance.word(),chance.word(),chance.word(),chance.word(),chance.word(),chance.word()];

  for(i = 0; i < words.length; i++) {
    $("#words").text($("#words").text() + " " + words[i]);
  }
}

function addWord() {
  $("#words").text($("#words").text() + " " + chance.word());
}
