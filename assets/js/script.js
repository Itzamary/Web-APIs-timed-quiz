// find id of html elements.
var formDiv = document.querySelector("#quizform");
var strtButton = document.querySelector("#startquiz")
var timeEl = document.getElementById("time");
let timer = 30;
let intervalId;

var div = document.createElement("div");
div.id = "newQuestion";

var section = document.querySelector("#keepMe");


// create elements to add later in functions
var questions = document.createElement("h1");
var btnOne = document.createElement("button");
var btnTwo = document.createElement("button");
var btnThree = document.createElement("button");
var btnFour = document.createElement("button");

var questionNum = 0;

// var for id in documnets
var formEl = document.getElementById("hide-form")
var tellMe = document.getElementById("tellMe");


// id of quesitons and buttons

questions.id = "questions";
btnOne.id = "btn1";
btnTwo.id = "btn2";
btnThree.id = "btn3";
btnFour.id = "btn4";


// array of object questions.
var questionArray = [{
    question: "Commonly used data types DO NOT Include:",
    answerOne:"strings",
    answerTwo:"booleans",
    answerThree: "alerts",
    answerFour:"numbers",
    answer: function(){
        return this.answerThree;
    }
},
{
    question:"The condition in an if / else statement id enclosed with _____.",
    answerOne: "quotes",
    answerTwo: "curley braces",
    answerThree: "parenthesis",
    answerFour: "square brackets",
    answer: function(){
        return this.answerThree;
    }
},
{
    question: "Arrays in JavaScript can be used to store _____.",
    answerOne: "numbers and strings",
    answerTwo: "other arrays",
    answerThree: "boolians",
    answerFour: "all of the above",
    answer: function(){
        return this.answerFour;
    }
}];

// count value function
function countValue(){
    timeEl.innerText = "Time: " + timer;

    if (timer <= 0) {
        clearInterval(intervalId);
    }

    timer--;
};



// loop through array of object questions
function createEl(){

    console.log(questionNum);
    

     questions.innerText = questionArray[questionNum].question;
     btnOne.innerText = questionArray[questionNum].answerOne;
     btnTwo.innerText = questionArray[questionNum].answerTwo;
     btnThree.innerText = questionArray[questionNum].answerThree;
     btnFour.innerText = questionArray[questionNum].answerFour;

     btnOne.onclick = checkAns;
     btnTwo.onclick = checkAns;
     btnThree.onclick = checkAns;
     btnFour.onclick = checkAns;
     
     section.appendChild(div);
     div.appendChild(questions);
     div.appendChild(btnOne);
     div.appendChild(btnTwo);
     div.appendChild(btnThree);
     div.appendChild(btnFour);

};


// check if answer is correct or not and notify me .
var checkAns = function (event) {
    console.log(event.target.textContent);
    console.log(questionArray[questionNum].answerThree);
    if (event.target.textContent === questionArray[questionNum].answer()){
        console.log("correct");
        tellMe.innerText = "Correct";
    } else {
        console.log("incorrect");
        timer -=10;
        tellMe.innerText = "Wrong!!!";
    }
    questionNum++;
    createEl();
}

const myInterval = () => {
    intervalId =  setInterval(countValue, 1000);
    
};

// const stopInterval = () {
//     if (timer)
// }

//start game on click
var startGame= function(event){
    event.preventDefault();
    formDiv.style.display = "none";
    

   myInterval();
   console.log(intervalId)


   if (timer == 0) {
    clearInterval(intervalId);
   }

   createEl();
}


// event listener for parent click.
strtButton.addEventListener("click", startGame);

