// Define an array to hold your quiz questions
const questions = [{
        question: "Who do the Borogravians worship?",
        answers: [{
                text: "Nuggan",
                correct: true
            },
            {
                text: "Om",
                correct: false
            },
            {
                text: "Nugget",
                correct: false
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
                text: "Gaurding Dark",
                correct: true
            },
            {
                text: "Sentry Dark",
                correct: false
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
                text: "Golems",
                correct: true
            },
            {
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
        ]
    },
    {
        question: "Terry Pratchett colaborated with Neil Gaman on which book?",
        answers: [{
                text: "Good Omens",
                correct: true
            },
            {
                text: "Good Intentions",
                correct: false
            },
            {
                text: "Interesting Times",
                correct: false
            },
            {
                text: "The Sandman",
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

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
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

// Reseting the answer button options

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

// completeing the question cycle

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again?";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();