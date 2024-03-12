// Define an array to hold your quiz questions
let originalQuestions = [{
    question: "Who do the Borogravians worship?",
    answers: [{
            text: "Om",
            correct: false
        },
        {
            text: "Nugget",
            correct: false
        },
        {
            text: "Nuggan",
            correct: true
        },
        {
            text: "Anoia",
            correct: false
        },
    ]
},
{
    question: "Whats the name of the Terry Pratchett's book set on a fictional Pacific Island devistated by a tsumami?",
    answers: [{
            text: "Nation",
            correct: true
        },
        {
            text: "Island",
            correct: false
        },
        {
            text: "Country",
            correct: false
        },
        {
            text: "State",
            correct: false
        },
    ]
},
{
    question: "Sam Vimes fights the summoning dark with?",
    answers: [{
            text: "Patrolling Dark",
            correct: false
        },
        {
            text: "Guarding Dark",
            correct: true
        },
        {
            text: "Protecting Dark",
            correct: false
        },
        {
            text: "Shielding Dark",
            correct: false
        },
    ]
},
{
    question: "What is the Ankh Morpork economic standard after 'Making Money'?",
    answers: [{
            text: "Gold",
            correct: false
        },
        {
            text: "Stamps",
            correct: false
        },
        {
            text: "Cabbages",
            correct: false
        },
        {
            text: "Golems",
            correct: true
        },
    ]
},
{
    question: "Terry Pratchett colaborated with Neil Gaman on which book?",
    answers: [{
            text: "Good Omens",
            correct: true
        },
        {
            text: "The Sandman",
            correct: false
        },
        {
            text: "Good Intentions",
            correct: false
        },
        {
            text: "Interesting Times",
            correct: false
        },
    ]
}
];
// I plan to add more questions to the array

// Defining game elements
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const enterButton = document.getElementById("enter-btn");
const usernameSection = document.getElementById("username-section");
const quizSection = document.getElementById("quiz-section");
const homeButton = document.getElementById("home-btn");

let currentQuestionIndex = 0;
let score = 0;

let questions = originalQuestions.slice(); // Copy the original questions array

// Shuffle function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffle the questions array
shuffle(questions);

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    // Select the first three questions from the shuffled array
    questions = questions.slice(0, 3);
    showQuestion();
}

// Making username/front page work
let username;

enterButton.onclick = function(){
    username = document.getElementById("username").value;
    if (username.trim() !== '') { // Check if username is not empty
        // Hide username section and show quiz section
        usernameSection.style.display = "none";
        quizSection.style.display = "block";
        // Start the quiz
        startQuiz();
    } else {
        alert("Please enter your name!"); // Show an alert if username is empty
    }
}

// Making the buttons function, and change
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionno = currentQuestionIndex + 1;
    questionElement.innerHTML = questionno + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
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

// Resetting the answer button options
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    };
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

// Completing the question cycle

// Add resetQuestions function to reset the questions array to its original state
function resetQuestions() {
    questions = originalQuestions.slice();
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Congratulations ${username}, you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again?";
    nextButton.style.display = "block";
    homeButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
        resetQuestions(); // Reset the questions array
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();  