// Importing the questions array
import { originalQuestions } from "./quizQuestions.js";

// Defining game elements
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const replayButton = document.getElementById("replay-btn"); // New Replay Button
const exitButton = document.getElementById("exit-btn"); // New Exit Button
const enterButton = document.getElementById("enter-btn");
const usernameSection = document.getElementById("username-section");
const quizSection = document.getElementById("quiz-section");
const highscoreElement = document.getElementById("highscore"); // High Score Element

let currentQuestionIndex = 0;
let score = 0;
let username;
let questions = [];
let highscore = 0;

// Load high score from local storage
function loadHighScore() {
    const storedHighScore = localStorage.getItem(username);
    if (storedHighScore) {
        highscore = parseInt(storedHighScore, 10);
        highscoreElement.innerHTML = `High Score: ${highscore}`;
    }
}

// Save high score to local storage
function saveHighScore() {
    if (score > highscore) {
        highscore = score;
        localStorage.setItem(username, highscore);
        highscoreElement.innerHTML = `High Score: ${highscore}`;
    }
}

// Shuffle function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Start quiz function
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    resetQuestions(); // Reset the questions array
    shuffle(questions); // Shuffle the questions
    // Select the first 15 questions from the shuffled array or all if less than 15
    questions = questions.slice(0, Math.min(5, questions.length)); //set to 5 for testing
    showQuestion();
}

// Reset questions function
function resetQuestions() {
    questions = originalQuestions.slice(); // Copy the original questions array
}

// Username entry and storing
enterButton.onclick = function () {
    username = document.getElementById("username").value;
    if (username.trim() !== "") {
        // Check if username is not empty
        // Hide username section and show quiz section
        usernameSection.style.display = "none";
        quizSection.style.display = "block";
        // Load high score for the user
        loadHighScore();
        // Start the quiz
        startQuiz();
    } else {
        alert("Please enter your name!"); // Show an alert if username is empty
    }
};

// Show question function
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

// Reset state function
function resetState() {
    nextButton.style.display = "none";
    replayButton.style.display = "none"; // Hide Replay button
    exitButton.style.display = "none"; // Hide Exit button
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Select answer function
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

// Show score function
function showScore() {
    resetState();
    if (score >= 1) {
        questionElement.innerHTML = `Congratulations ${username}, you scored ${score} out of ${questions.length}!`;
    } else {
        questionElement.innerHTML = `${username}, you didn't answer any right, you might need to do some further reading!`;
    }
    // Save the high score
    saveHighScore();
    replayButton.innerHTML = "Play Again?";
    replayButton.style.display = "block"; // Show Replay button
    exitButton.style.display = "block"; // Show Exit button
}

// Handle next button function
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// Event listener for next button
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        showScore();
    }
});

// Event listener for replay button
replayButton.addEventListener("click", () => {
    startQuiz();
});

// Event listener for exit button
exitButton.addEventListener("click", () => {
    // Reset the username section to allow the user to enter the name again
    usernameSection.style.display = "block";
    quizSection.style.display = "none";
    // Optionally clear the username input field
    document.getElementById("username").value = "";
    // Reset the button text to "Next"
    nextButton.innerHTML = "Next";
    replayButton.style.display = "none"; // Hide Replay button
    exitButton.style.display = "none"; // Hide Exit button
    // Reset highscore display
    highscoreElement.innerHTML = "High Score: 0";
});

// Initial call to start the quiz
startQuiz();