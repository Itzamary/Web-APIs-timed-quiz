
var formDiv = document.querySelector("#quizform");
var strtButton = document.querySelector("#startquiz")
var timeEl = document.getElementById("time");
var timer = 60;

var div = document.createElement("div");
div.id = "newQuestion";

var section = document.querySelector("#keepMe");



var questions = document.createElement("h1");
var btnOne = document.createElement("button");
var btnTwo = document.createElement("button");
var btnThree = document.createElement("button");
var btnFour = document.createElement("button");

var questionNum = 0;

var formEl = document.getElementById("hide-form")


questions.id = "questions";
btnOne.id = "btn1";
btnTwo.id = "btn2";
btnThree.id = "btn3";
btnFour.id = "btn4";



var questionArray = [{
    question: "Commonly used data types DO NOT Include:",
    answerOne:"strings",
    answerTwo:"booleans",
    answerThree: "alerts",
    answerFour:"numbers",
    answer: this.answerThree
},
{
    question:"The condition in an if / else statement id enclosed with _____.",
    answerOne: "quotes",
    answerTwo: "curley braces",
    answerThree: "parenthesis",
    answerFour: "square brackets",
    answer: this.answerOne
},
{
    question: "Arrays in JavaScript can be used to store _____.",
    answerOne: "numbers and strings",
    answerTwo: "other arrays",
    answerThree: "boolians",
    answerFour: "all of the above",
    answer: this.answerFour
}];


// count value function
function countValue(){
    timer--;
    timeEl.innerText = "Time: "+timer;
    if(timer <= 0){
        clearInterval(countValue);
        
    }
};



// loop through array of object questions
function createEl(event){

    event.preventDefault();

    
    

    console.log(questionNum);
    

     questions.innerText = questionArray[questionNum].question;
     btnOne.innerText = questionArray[questionNum].answerOne;
     btnTwo.innerText = questionArray[questionNum].answerTwo;
     btnThree.innerText = questionArray[questionNum].answerThree;
     btnFour.innerText = questionArray[questionNum].answerFour;
     
     
     section.appendChild(div);
     div.appendChild(questions);
     div.appendChild(btnOne);
     div.appendChild(btnTwo);
     div.appendChild(btnThree);
     div.appendChild(btnFour);

     questionNum++;

     if (event.target === question.answer){
         console.log("You are wrong")
     }


}

//start game on click

var startGame= function(event){
    event.preventDefault();
    formDiv.style.display = "none";


    
   setInterval(countValue,1000);


}

section.addEventListener("click", createEl);
strtButton.addEventListener("click", startGame);
