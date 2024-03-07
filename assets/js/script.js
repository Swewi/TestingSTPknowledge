// Define an array to hold your quiz questions
const questions = [
    {
        question: "Who do the Borogravians worship?",
        options: ["Nuggan, Om, Nugget, Anoia"],
        correctAnswer: "Nuggan" 
    },
    {
        question: "Whats the name of the Terry Pratchett's book set on a fictional Pacific Island devistated by a tsumami?",
        options: ["Nation, Island, Country,	State"],
        correctAnswer: "Nation" 
    },
    {
        question: "Sam Vimes fights the summoning dark with?",
        options: ["Gaurding Dark, Sentry Dark, Protecting Dark, Shielding Dark"],
        correctAnswer: "Gaurding Dark" 
    },
    {
        question: "What is the Ankh Morpork economic standard after 'Making Money'?",
        options: ["Golems, Gold, Stamps, Cabbages"],
        correctAnswer: "Golems" 
    },
    {
        question: "Terry Pratchett colaborated with Neil Gaman on which book?",
        options: ["Good Omens, Good Intentions,	Interesting Times, The Sandman"],
        correctAnswer: "Good Omens" 
    }
]
// I plan to add more questions to the array

const questionContainer = document.getElementById('question-container');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

if (!questionContainer || !answerButtonsElement || !nextButton) {
  throw new Error('One or more DOM elements could not be found.');
}

let currentQuestionIndex = 0;

nextButton.addEventListener('click', () => {
    if (!questions || questions.length === 0) {
      console.error('No questions available.');
      return;
    }
    
    currentQuestionIndex++;
    setNextQuestion();
  });
  
  startGame();
  
  function startGame() {
    currentQuestionIndex = 0;
    setNextQuestion();
  }
  
  function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
  }
  
  function showQuestion(question) {
    questionContainer.innerText = question.question;
    question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      button.addEventListener('click', () => selectAnswer(answer));
      answerButtonsElement.appendChild(button);
    });
  }
  
  function selectAnswer(answer) {
    const correct = answer.correct;
    if (correct) {
      nextButton.classList.remove('hide');
    }
  
    // Add feedback for right or wrong answer
    setStatusClass(document.body, correct);
  
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.innerText === answer.text ? answer.correct : !answer.correct);
    });
  
    if (currentQuestionIndex === questions.length - 1) {
      nextButton.innerText = 'Restart';
      nextButton.addEventListener('click', startGame);
    } else {
      nextButton.innerText = 'Next';
    }
  }
  
  function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
      element.classList.add('correct');
    } else {
      element.classList.add('wrong');
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
  }
  
  function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  }
  
