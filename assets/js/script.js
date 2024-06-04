// Importing the questions array
import {
    originalQuestions
} from "./quizQuestions.js";

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
const progressBar = document.getElementById("progress-bar"); // Progress Bar Element
const difficultySection = document.getElementById("difficulty-section"); // Difficulty Section

let currentQuestionIndex = 0;
let score = 0;
let username;
let questions = [];
let highscore = 0;
let timerInterval;
let difficulty;
let timerDuration;

// Load high score from local storage
function loadHighScore() {
    const storedHighScore = localStorage.getItem(username);
    if (storedHighScore) {
        highscore = parseInt(storedHighScore, 10);
    } else {
        highscore = 0;
    }
    highscoreElement.innerHTML = `High Score: ${highscore}`;
}

// Save high score to local storage
function saveHighScore() {
    if (score > highscore) {
        highscore = score;
        localStorage.setItem(username, highscore);
        highscoreElement.innerHTML = `High Score: ${highscore}`;
        console.log(`New highscore set: ${highscore}`);
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
    // Select the first 15 questions from the shuffled array
    questions = questions.slice(0, Math.min(15, questions.length));
    showQuestion();
}

// Reset questions function
function resetQuestions() {
    questions = originalQuestions.slice(); // Copy the original questions array
}

// Username entry and storing
enterButton.onclick = function () {
    username = document.getElementById("username").value;
    difficulty = document.getElementById("difficulty").value;

    if (username.trim() !== "") {
        // Set timer duration based on difficulty
        switch (difficulty) {
            case "easy":
                timerDuration = 200; // Easy: 200 ticks (20 seconds)
                break;
            case "medium":
                timerDuration = 150; // Medium: 150 ticks (15 seconds)
                break;
            case "hard":
                timerDuration = 100; // Hard: 100 ticks (10 seconds)
                break;
            default:
                timerDuration = 200; // Default to Easy
        }

        // Hide username and difficulty sections and show quiz section
        usernameSection.style.display = "none";
        difficultySection.style.display = "none";
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

    // Start the timer for each question
    startTimer();
}

// Reset state function
function resetState() {
    nextButton.style.display = "none";
    replayButton.style.display = "none"; // Hide Replay button
    exitButton.style.display = "none"; // Hide Exit button
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    // Reset progress bar
    resetProgressBar();
    // Ensure progress bar is visible when resetting state
    progressBar.style.visibility = "visible";
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

    // Stop the timer
    stopTimer();
}

// Show score function
function showScore() {
    resetState();
    let message = "";

    if (score > highscore) {
        highscore = score;
        localStorage.setItem(username, highscore); // Save the new high score
        message = `Amazing ${username}, you beat your high score! You scored ${score} out of ${questions.length}!`;
    } else if (score >= 1) {
        message = `Congratulations ${username}, you scored ${score} out of ${questions.length}.`;
    } else {
        message = `${username}, you didn't answer any right. You might need to do some further reading!`;
    }

    highscoreElement.innerHTML = `High Score: ${highscore}`; // Update the high score display
    questionElement.innerHTML = message;
    replayButton.innerHTML = "Play Again?";
    replayButton.style.display = "block"; // Show Replay button
    exitButton.style.display = "block"; // Show Exit button

    // Hide progress bar at the end of the quiz
    progressBar.style.display = "none";
}

// Handle next button function
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
        saveHighScore(); // Ensure high score is saved at the end
    }
}

// Event listener for next button
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        showScore();
        saveHighScore(); // Ensure high score is saved at the end
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
    difficultySection.style.display = "block"; // Show difficulty section
    quizSection.style.display = "none";
    // Optionally clear the username input field
    document.getElementById("username").value = "";
    // Reset the button text to "Next"
    nextButton.innerHTML = "Next";
    replayButton.style.display = "none"; // Hide Replay button
    exitButton.style.display = "none"; // Hide Exit button
    // Reset highscore display
    highscoreElement.innerHTML = "High Score: 0";
    highscore = 0; // Reset highscore variable
});

// Timer functions
function startTimer() {
    let time = 0;
    progressBar.style.width = "0%";
    progressBar.style.backgroundColor = "#4caf50";
    progressBar.style.visibility = "visible"; // Ensure progress bar is visible when starting timer

    timerInterval = setInterval(() => {
        time += 1;
        const progress = (time / timerDuration) * 100;
        progressBar.style.width = `${progress}%`;

        if (progress > 85) {
            progressBar.style.backgroundColor = "#CC0000"; // Red color
        } else if (progress > 60) {
            progressBar.style.backgroundColor = "#ABAF4C"; // Yellow color
        } else {
            progressBar.style.backgroundColor = "#504caf"; // Green color
        }

        if (progress >= 100) {
            clearInterval(timerInterval);
            lockQuestion();
        }
    }, 100);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetProgressBar() {
    clearInterval(timerInterval);
    progressBar.style.width = "0%";
    progressBar.style.backgroundColor = "#4caf50";
    progressBar.style.display = "block"; // Ensure progress bar is visible when resetting
}

function lockQuestion() {
    Array.from(answerButtons.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

// Initial call to hide the quiz section and show the difficulty section
quizSection.style.display = "none";
difficultySection.style.display = "block"; // Show difficulty section on page load


// Initial call to start the quiz
startQuiz();