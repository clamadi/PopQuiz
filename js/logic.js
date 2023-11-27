// Set Variables.
var timer;
var timeLeft = 100;
var quizIndex = 0;

var questionsDiv = document.getElementById("questions");
var startButton = document.getElementById("start");
var startDiv = document.getElementById("start-screen");
var timeEl = document.getElementById("time");
var questionEl = document.getElementById("question-title");
var choicesEl = document.getElementById("choices");
var feedbackEl = document.getElementById("feedback");
var endDiv = document.getElementById("end-screen");
var finalScoreEl = document.getElementById("final-score");

startButton.onclick = startQuiz; // calls the start function on click of the start button

function startQuiz(){
   console.log("start button clicked, start quiz function called");
   startDiv.setAttribute("class", "hide");
   questionsDiv.removeAttribute("class");
   timer = setInterval(oneSecondclockHandler, 1000);
   timeEl.textContent = timeLeft;
   NextQuestion();

}
// create a function for the timer
function oneSecondclockHandler(){
    timeLeft --;
    timeEl.textContent = timeLeft;
}
// create function for questions to allow the next question show on click
function NextQuestion(){
var presentQuestion = questions[quizIndex];

questionEl.textContent = presentQuestion.q;

choicesEl.innerHTML = "";

presentQuestion.ansChoices.forEach(function(option, i) {
    var btn = document.createElement("button");
    btn.setAttribute("value", option);
    btn.setAttribute("class", "choice");

    btn.textContent = i + 1 + ". " + option;

    btn.onclick = ansChoiceClick; // this selects the answer on click of the button

    choicesEl.appendChild(btn);
    
})
}
//call a function anschoiceclick to set the values of the selected options 'correct!! or incorrect!!'
function ansChoiceClick(){
  if(this.value !== questions[quizIndex].answer){
    timeLeft -= 10;

    if(timeLeft <0){
        timeLeft = 0
    }
    feedbackEl.textContent = "incorrect!!" 

    timeEl.textContent = timeLeft;
  }  else {
    feedbackEl.textContent = "correct!!"
  }

  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function(){
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);

  quizIndex ++;

  if(quizIndex === questions.length){
    endQuiz();
  } else {
    NextQuestion();
  }
}

function endQuiz(){
    clearInterval(timer);

  endDiv.removeAttribute("class");
  finalScoreEl.textContent = timeLeft;
  questionsDiv.setAttribute("class", "hide");

}