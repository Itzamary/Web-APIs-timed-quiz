// find id of html elements.
var formDiv = document.querySelector("#quizform");
var strtButton = document.querySelector("#startquiz")
var submitName = document.querySelector('#submit-name');
var timeEl = document.getElementById("time");
let timer = 30;
let intervalId;
let scoresArr = [];
let scoreObj = {
    score: 0,
    user: ''
};
const scoreParagraph = document.querySelector('#score');

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
var formEl = document.querySelector("#hide-form")
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
    question:"The condition in an if / else statement is enclosed with _____.",
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
},
{
    question: "Inside which HTML tag do we add the JavaScript?",
    answerOne: "<javascript>",
    answerTwo: "<script>",
    answerThree: "<js>",
    answerFour: "<scripting",
    answer: function(){
        return this.answerTwo;
    }
},
{
    question: "How do you write \"Hello World\" in an alert box?",
    answerOne: "msgBox(\"Hello World\")",
    answerTwo: "alert(\"Hello World\")",
    answerThree: "alertBox(\"Hello World\")",
    answerFour: "msg(\"Hello World\")",
    answer: function(){
        return this.answerTwo;
    }
},
{
    question: "How do you add a comment in javascript?",
    answerOne: "// This is a comment",
    answerTwo: "<// This is a comment//>",
    answerThree: "<!--This is a comment-->",
    answerFour: "/*This is a comment*/",
    answer: function(){
        return this.answerOne;
    }
},
{
    question: "What is the correct way to write a JavaScript array?",
    answerOne: "var colors = \"red\", \"green\", \"blue\" ",
    answerTwo: "var colors = (1:\"red\", 2:\"green\", 3:\"blue\")",
    answerThree:  "var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")",
    answerFour: "var colors = [\"red\", \"green\", \"blue\"]",
    answer: function(){
        return this.answerFour;
    }
},
{
    question: "Which operator is used to assign a value to a variable?",
    answerOne: "=",
    answerTwo: "X",
    answerThree: "-",
    answerFour: "%",
    answer: function(){
        return this.answerOne;
    }
},
{
    question: "How do you find the minimum of x and y using JavaScript?",
    answerOne: "min(x, y)",
    answerTwo: "min(xy)",
    answerThree: "Math.min(x, y)",
    answerFour: " Math.min(xy)",
    answer: function(){
        return this.answerThree;
    }
},
{
    question: "What is the correct \"if\" statement to execute if \"x\" is equal to 2?",
    answerOne: " if(x != 2) ",
    answerTwo: " if(x == 2) ",
    answerThree: " if(x2) ",
    answerFour: " if(x = 2) ",
    answer: function(){
        return this.answerTwo;
    }
},
{
    question: "Which is the correct JavaScript syntax to change the HTML content of \"<p id='test'>Hello World!</p>\"",
    answerOne: "document.getElementById(test).innerHTML = \"Hello DataFlair!\"",
    answerTwo: " document.getElementByTagName(\"p\")[0].innerHTML = \"Hello DataFlair!\"",
    answerThree: "document.getElementsById(\"test\").innerHTML = \"Hello DataFlair!\"",
    answerFour: " document.getElementById(\"test\").innerHTML = \"Hello DataFlair!\"",
    answer: function(){
        return this.answerFour;
    }
}];

// count value function
function countValue(){
    timeEl.innerText = "Time: " + timer;

    if (timer <= 0) {
        clearInterval(intervalId);
        endGame()
    }

    timer--;
};



// loop through array of object questions
function createEl(){
    console.log(questionNum);
    
    tellMe.innerHTML = ""
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
        scoreObj.score += 13;
        tellMe.innerText = "Correct";
    } else {
        console.log("incorrect");
        timer -=5;
        tellMe.innerText = "Wrong!!!";
    }
    questionNum++;
    setTimeout(createEl, 1000);
    //createEl();
}

// start interval for timer
const myInterval = () => {
    intervalId =  setInterval(countValue, 1000);
    
};

// save the score object to local storage
const saveScore = function() {
    scoresArr.push(scoreObj);
        console.log(scoreObj, 'scoresObject')
    localStorage.setItem('scoreObj', JSON.stringify(scoresArr))
}

const loadScore = function() {
    let scoreArray = localStorage.getItem('scoreObj');
    scoreArray = JSON.parse(scoreArray);
    console.log(scoreArray);
    for (let i = 0; i < scoreArray.length; i++) {
        scoresArr.push(scoreArray[i]);
    }
    
}

//start game on click
var startGame= function(event){
    event.preventDefault();
    formDiv.style.display = "none";
    

   myInterval();

   createEl();
}

// end the game.
var endGame = function () {

        section.style.display = 'none';
        scoreParagraph.innerText = `Your final score is: ${scoreObj.score}`;
        formEl.style.visibility ='visible';

    
}

// form submition
submitName.onclick = function() {
    const user = document.getElementById('user-initial').value;
    scoreObj.user = user
    saveScore();
}

// event listener for parent click.
strtButton.addEventListener("click", startGame);

loadScore();