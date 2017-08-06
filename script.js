$(document).ready(function(){

  
//defining magic 8 ball
  var magic8Ball = {};
  
  magic8Ball.listofAnswers = ["The future looks bright", "Most definitely", "I don't know about that", "Try again", "Probably not", "Yes", "No"];
  
  $("#answer").hide();
  
//getting magic 8 ball to show a random answer from list of answers 
   magic8Ball.askQuestion = function(question){
    //create a random number
      var randomNumber = Math.random();
    //create random number between 0 and length of array
      var randomNumberforlistofAnswers = randomNumber * this.listofAnswers.length;
    //round down to a whole number
      var randomIndex = Math.floor(randomNumberforlistofAnswers);
    //use number to index answer from array
      var answer = this.listofAnswers[randomIndex];
    
    
    $("#answer").text(answer);
     
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	
    $("#8ball").effect("shake");
     
	console.log(question);
	console.log(answer);
  };

  
  $("#answer").hide();
  
  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

  
  //prompting user to enter in a question

  var onClick = function(){
    //wait half a second before showing prompt
    setTimeout(
      function() {
        //show prompt
        var question = prompt("Ask a yes or no question");     
        $("#answer").fadeIn(4000);
        magic8Ball.askQuestion(question)
      }, 500);
  };


   $("#questionButton").click(onClick);
});