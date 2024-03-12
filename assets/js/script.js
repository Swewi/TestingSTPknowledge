// Define an array to hold your quiz questions
let originalQuestions = [{
        question: "Who do the Borogravians worship in 'Monstrous Regiment'?",
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
        question: "Sam Vimes fights the summoning dark with the... in 'Thud'?",
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
    },
    {
        question: "What was the name of the magical sword Rincewind uses in 'Colour of Magic'?",
        answers: [{
                text: "Krying",
                correct: false
            },
            {
                text: "Krunch",
                correct: false
            },
            {
                text: "Kring",
                correct: true
            },
            {
                text: "Krull",
                correct: false
            },
        ]
    },
    {
        question: "What is the petname Moist von Lipwig uses for his wife?",
        answers: [{
                text: "Dora",
                correct: false
            },
            {
                text: "Spike",
                correct: true
            },
            {
                text: "Belle",
                correct: false
            },
            {
                text: "Sweetie",
                correct: false
            },
        ]
    },
    {
        question: "The PC game 'Discworld' was released in which year?",
        answers: [{
                text: "1994",
                correct: false
            },
            {
                text: "1995",
                correct: true
            },
            {
                text: "1996",
                correct: false
            },
            {
                text: "1997",
                correct: false
            },
        ]
    },
    {
        question: "Who becomes Emporor of The Counterweight Continent at the end of 'Interesting Times'?",
        answers: [{
                text: "Cohen the Barbiarian",
                correct: true
            },
            {
                text: "Twoflower",
                correct: false
            },
            {
                text: "Rincewind",
                correct: false
            },
            {
                text: "Lord Hong",
                correct: false
            },
        ]
    },
    {
        question: "Lu-Tze is a follower of 'The Way', from whom did he learn 'The Way'?",
        answers: [{
                text: "Mrs Proust",
                correct: false
            },
            {
                text: "Mrs. Arcanum",
                correct: false
            },
            {
                text: "Mrs. Cake",
                correct: false
            },
            {
                text: "Mrs. Cosmopolite",
                correct: true
            },
        ]
    },
    {
        question: "What's the name of the best/worst inventor in Discworld history?",
        answers: [{
                text: "Hubert Turvy",
                correct: false
            },
            {
                text: "Leonard of Quirm",
                correct: false
            },
            {
                text: "Pors Stronginthearm",
                correct: false
            },
            {
                text: "Bergholt Stuttley (Bloody Stupid) Johnson",
                correct: true
            },
        ]
    },
    {
        question: "Why is the 25th of May important?",
        answers: [{
                text: "Republic of Treacle Mine Road",
                correct: true
            },
            {
                text: "Reg Shoe became a zombie",
                correct: false
            },
            {
                text: "Hard boiled eggs",
                correct: false
            },
            {
                text: "John Keel died",
                correct: false
            },
        ]
    },
    {
        question: "Who is the farther of Archchancellor Coin?",
        answers: [{
                text: "Mustrum Ridcully",
                correct: false
            },
            {
                text: "Drum Billet",
                correct: false
            },
            {
                text: "Ipslore The Red",
                correct: true
            },
            {
                text: "Alberto Malich",
                correct: false
            },
        ]
    },
    {
        question: "What is Tiffany Achings talent?",
        answers: [{
                text: "Spinning",
                correct: false
            },
            {
                text: "Cheese Making",
                correct: true
            },
            {
                text: "Sewing",
                correct: false
            },
            {
                text: "Magic",
                correct: false
            },
        ]
    },
    {
        question: "What is the name of Granny Weatherwax cats?",
        answers: [{
                text: "You",
                correct: true
            },
            {
                text: "Greebo",
                correct: false
            },
            {
                text: "Come here",
                correct: false
            },
            {
                text: "Cat",
                correct: false
            },
        ]
    },
    {
        question: "How many husbands has Nanny Ogg had?",
        answers: [{
                text: "Two",
                correct: false
            },
            {
                text: "Three",
                correct: true
            },
            {
                text: "Four",
                correct: false
            },
            {
                text: "Five",
                correct: false
            },
        ]
    },
    {
        question: "Who explores/lives in 'The Travelling Now'?",
        answers: [{
                text: "Tiffany Aching",
                correct: false
            },
            {
                text: "Simon",
                correct: false
            },
            {
                text: "Eskarina Smith",
                correct: true
            },
            {
                text: "Agnes Nitt",
                correct: false
            },
        ]
    },
    {
        question: "What is the name of The Auditor that helps save humanity in 'The Thief of Time'?",
        answers: [{
                text: "Myria LeJoan",
                correct: false
            },
            {
                text: "Myriad LeJean",
                correct: false
            },
            {
                text: "Myra LeJoan",
                correct: false
            },
            {
                text: "Myria LeJean",
                correct: true
            },
        ]
    },
    {
        question: "Whats the name of Lord Vetinaris dog?",
        answers: [{
                text: "Gaspode",
                correct: false
            },
            {
                text: "Mr Fusspot",
                correct: false
            },
            {
                text: "Wuffles",
                correct: true
            },
            {
                text: "Laddie",
                correct: false
            },
        ]
    },
    {
        question: "In the TV adaption of 'The Hogfather' who played Lord Vetinari?",
        answers: [{
                text: "Charles Dance",
                correct: true
            },
            {
                text: "Bill Nighy",
                correct: false
            },
            {
                text: "Jeremy Irons",
                correct: false
            },
            {
                text: "Jeremy Irons",
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
// Start function
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    resetQuestions(); // Reset the questions array
    shuffle(questions); // Shuffle the questions again after resetting
    // Select the first three questions from the shuffled array
    questions = questions.slice(0, 15);
    showQuestion();
}
// Add resetQuestions function to reset the questions array to its original state
function resetQuestions() {
    questions = originalQuestions.slice();
    shuffle(questions); // Shuffle the questions again after resetting
}
// Making username/front page work
let username;
// Username entry and storing
enterButton.onclick = function () {
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