// Declaring variables for elements
var timerEl = document.querySelector('#timerEl');
var timeLeft = document.querySelector("#timeLeft");

var start = document.querySelector("#start");
var startButton = document.querySelector("#startButton");

var questions = document.querySelector("#questions");
var question = document.querySelector("#question");
var answerA = document.querySelector("#answerA");
var answerB = document.querySelector("#answerB");
var answerC = document.querySelector("#answerC");
var answerD = document.querySelector("#answerD");



var countdown = (0);

// HTML Template
var questionTemplate = `
    <h2>${currentQuestion.question}</h2>

    <button data-answer="${currentQuestion.answers[0]}">${currentQuestion.answers[0]}</button>

    <button data-answer="${currentQuestion.answers[1]}">${currentQuestion.answers[0]}</button>

    <button data-answer="${currentQuestion.answers[2]}">${currentQuestion.answers[0]}</button>

    <button data-answer="${currentQuestion.answers[3]}">${currentQuestion.answers[0]}</button>
    `

    document.getElementById("questions").innerHTML = questionTemplate;

    console.log();



// Declare 'questions'
var questionPosition = 0;

var questions = [
    {
        // question
        question: "What is the coding question",
        // answers
        answers: ["Answer A", "Answer B", "Answer C", "Answer D"],
        // correct answer
        correct: "Answer A"
    },
    {
        question: "What is the coding question",
        answers: ["Answer A", "Answer B", "Answer C", "Answer D"],
        correct: "Answer A"
    },
    {
        question: "What is the coding question",
        answers: ["Answer A", "Answer B", "Answer C", "Answer D"],
        correct: "Answer A"
    },
    {
        question: "What is the coding question",
        answers: ["Answer A", "Answer B", "Answer C", "Answer D"],
        correct: "Answer A"
    },
    {
        question: "What is the coding question",
        answers: ["Answer A", "Answer B", "Answer C", "Answer D"],
        correct: "Answer A"
    },
    {
        question: "What is the coding question",
        answers: ["Answer A", "Answer B", "Answer C", "Answer D"],
        correct: "Answer A"
    },
    {
        question: "What is the coding question",
        answers: ["Answer A", "Answer B", "Answer C", "Answer D"],
        correct: "Answer A"
    },
    {
        question: "What is the coding question",
        answers: ["Answer A", "Answer B", "Answer C", "Answer D"],
        correct: "Answer A"
    },
    {
        question: "What is the coding question",
        answers: ["Answer A", "Answer B", "Answer C", "Answer D"],
        correct: "Answer A"
    },
    {
        question: "What is the coding question",
        answers: ["Answer A", "Answer B", "Answer C", "Answer D"],
        correct: "Answer A"
    },
];

// Declare a 'timerInterval'
var timerInterval

var currentQuestion = questions[questionPosition];

// Function 'startGame'
function startGame(){
    questionPosition = 0;
    timerEl = 90;
    timerInterval.textContent = timerEl;

}
    // Hide the start screen

    // Set the questions position to 0

    // Display the current question
    displayCurrentQuestion();

    // Set the starting value of 'countdown'

    // Start the timer 'startTimer'

        // IF 'countdown' === 0 

            //THEN 'endGame()'

// Function 'endGame'
function endGame() {
    // Clear the timer interval
    clearInterval(timerInterval);
}
    // Hide the questions area

    // Show the record high score screen

    

// Function 'answerQuestion'

    var currentQuestion = questions[questionPosition];

    // Validate response

        // IF the answer is wrong
            
            // THEN we need to subtract from 'countdown'

    // Increasing the question position by 1

    // IF I've passed the last questions

        // THEN 'endgame()'

    // ELSE

        // Display the current question
            questionPosition++
            displayCurrentQuestion
        
// Function 'displayCurrentQuestion'
function displayCurrentQuestion() {

}

// Function 'recordHighScore'
function recordHighScore() {

}

var questionContainer = document.querySelector('#question');

        questionContainer.addEventListener("click", function(event) {
            
            var clickElement = event.target;

            if( !clickElement.matches('button') ) return;

            var answer = clickElement.dataset.answer

        });