var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;

document.getElementById("startreset").onclick = function(){
	if (playing == true){
		location.reload();
	}
	else {
		playing = true;
		score = 0;
		
document.getElementById("scorevalue").innerHTML = score;
		//show count
		show("timeremaining");
		timeremaining = 60;
		
document.getElementById("timeremainingvalue").innerHTML = timeremaining;
 
		//hide game over
		hide("gameOver");
		
		//change start to reset		
document.getElementById("startreset").innerHTML = "Reset Game";
		
		//start count
		startCountdown();
		
		//generate quetion
		generateQuestion();
		
	}
}

for(i=1; i<5; i++){
document.getElementById("box"+i).onclick = function(){
	if (playing == true){
		if(this .innerHTML == correctAnswer){
			
			//increase score
			score++;
document.getElementById("scorevalue").innerHTML = score;
			hide("wrong");
			show("correct");
			setTimeout(function(){
				hide("correct");
			}, 1000);
			generateQuestion();
			
		}else{
			//wrong answer
				hide("correct");
				show("wrong");
				setTimeout(function(){
				hide("wrong");
			}, 1000);
		}		
	}
}
}

//functions
//start count
function startCountdown(){
	action = setInterval(function(){
		timeremaining -= 1;

		
document.getElementById("timeremainingvalue").innerHTML = timeremaining;
		if(timeremaining == 0){
			stopCountdown();
			show("gameOver");

//game over			
document.getElementById("gameOver").innerHTML = "<p>Game over! --> Your score is " + score + ".</p>";
			hide("timeremaining");
			hide("correct");
			hide("wrong");
			playing = false;
			
document.getElementById("startreset").innerHTML = "Start Game";
		}
	}, 1000);
}

//stop count
function stopCountdown() {
	clearInterval(action);
}

//hide
function hide(Id){
	document.getElementById(Id).style.display = "none";
}

//show
function show(Id) {
	document.getElementById(Id).style.display = "inline-block";
}

//question

//operators
var operators = [{
	sign: "+",
	method: function(a,b){ return a + b; }
},{
	sign: "-",
	method: function(a,b){ return a - b; }
},{
	sign: "*",
	method: function(a,b){ return a * b; }
},{
	sign: "/",
	method: function(a,b){ return a / b; }
}];


function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

function generateQuestion(){

	var selectedOperator = Math.floor(Math.random()*operators.length);
	
	var x = 1+ Math.round(9*Math.random());
	var y = 1+ Math.round(9*Math.random());
	correctAnswer = operators[selectedOperator].method(x, y);
	correctAnswer = round(correctAnswer,1);
	
document.getElementById("question").innerHTML = x + operators[selectedOperator].sign + y;
var correctPosition = 1+ Math.round(3*Math.random());
	
document.getElementById("box"+correctPosition).innerHTML = correctAnswer;//correct answer
	
	//wrong answers
	var answers = [correctAnswer];
	
	for(i=1; i<5; i++){
		if (i != correctPosition) {
			var wrongAnswer;
			do{
				
				wrongAnswer = operators[selectedOperator].method((1+
					Math.round(9*Math.random())), (1+
						Math.round(9*Math.random())));//wrong answer

						console.log(round(wrongAnswer,1));
						wrongAnswer = round(wrongAnswer,1)
				
}while(answers.indexOf(wrongAnswer)>-1)
			
document.getElementById("box"+i).innerHTML = wrongAnswer;			
			answers.push(wrongAnswer);
		}
	}
}
