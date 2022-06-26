// Declare 'countdown'
var countdown = ;

// HTML Template
var template = `
    <h2>${currentQuestion.question}</h2>
    <button data-answer="${currentQuestion.answers[0]}">${currentQuestion.answers[0]}</button>
    <button data-answer="${currentQuestion.answers[1]}">${currentQuestion.answers[0]}</button>
    <button data-answer="${currentQuestion.answers[2]}">${currentQuestion.answers[0]}</button>
    <button data-answer="${currentQuestion.answers[3]}">${currentQuestion.answers[0]}</button>
    `

    document.getElementById("questions").innerHTML = template;

    console.log();



// Declare 'questions'
var questionPosition = 0;
var questions = [
    {
        // question
        question: "What is the coding question"
        // answers
        answers: ["Answer A", "Answer B", "Answer C", "Answer D"]
        // correct answer
        correct: "Answer A"
    },
    {
        // question
        // answers
        //correct answer
    },
];

// Declare a 'timerInterval'
var timerInterval

var currentQuestion = questions[questionPosition];

// Declare the timerEl
var timerEl = document.querySelector('#timer');

// Function 'startGame'

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