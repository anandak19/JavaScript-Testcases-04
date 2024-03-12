const questions = [
  {
    question:
      "1) Which programming language is often used for web development?",
    answers: [
      { option: "A) Python", index: "A", correct: false },
      { option: "B) Java", index: "B", correct: false },
      { option: "C) JavaScript", index: "C", correct: true },
      { option: "D) C#", index: "D", correct: false },
    ],
  },

  {
    question: "2) What is the capital of France?",
    answers: [
      { option: "A) London", index: "A", correct: false },
      { option: "B) Paris", index: "B", correct: true },
      { option: "C) Berlin", index: "C", correct: false },
      { option: "D) Madrid", index: "D", correct: false },
    ],
  },

  {
    question: "3) Which planet is known as the Red Planet?",
    answers: [
      { option: "A) Venus", index: "A", correct: false },
      { option: "B) Mars", index: "B", correct: true },
      { option: "C) Jupiter", index: "C", correct: false },
      { option: "D) Saturn", index: "D", correct: false },
    ],
  },

  {
    question: "4) What is the largest mammal?",
    answers: [
      { option: "A) Elephant", index: "A", correct: false },
      { option: "B) Gorilla", index: "B", correct: false },
      { option: "C) Giraffe", index: "C", correct: false },
      { option: "D) Blue Whale", index: "D", correct: true },
    ],
  },

  {
    question: "5) Which scientist developed the theory of relativity?",
    answers: [
      { option: "A) Isaac Newton", index: "A", correct: false },
      { option: "B) Galileo Galilei", index: "B", correct: false },
      { option: "C) Albert Einstein", index: "C", correct: true },
      { option: "D) Nikola Tesla", index: "D", correct: false },
    ],
  },

  {
    question: "6) In which year did the Titanic sink?",
    answers: [
      { option: "A) 1905", index: "A", correct: false },
      { option: "B) 1912", index: "B", correct: true },
      { option: "C) 1920", index: "C", correct: false },
      { option: "D) 1931", index: "D", correct: false },
    ],
  },

  {
    question: "7) Which gas is most abundant in the Earth's atmosphere?",
    answers: [
      { option: "A) Nitrogen", index: "A", correct: true },
      { option: "B) Oxygen", index: "B", correct: false },
      { option: "C) Carbon Dioxide", index: "C", correct: false },
      { option: "D) Hydrogen", index: "D", correct: false },
    ],
  },

  {
    question: "8) Who wrote 'Romeo and Juliet'?",
    answers: [
      { option: "A) Charles Dickens", index: "A", correct: false },
      { option: "B) William Shakespeare", index: "B", correct: true },
      { option: "C) Jane Austen", index: "C", correct: false },
      { option: "D) Mark Twain", index: "D", correct: false },
    ],
  },

  {
    question: "9) What is the capital of Japan?",
    answers: [
      { option: "A) Beijing", index: "A", correct: false },
      { option: "B) Seoul", index: "B", correct: false },
      { option: "C) Tokyo", index: "C", correct: true },
      { option: "D) Bangkok", index: "D", correct: false },
    ],
  },

  {
    question: "10) Which planet is known as the 'Morning Star'?",
    answers: [
      { option: "A) Mars", index: "A", correct: false },
      { option: "B) Mercury", index: "B", correct: false },
      { option: "C) Jupiter", index: "C", correct: false },
      { option: "D) Venus", index: "D", correct: true },
    ],
  }
];

//elements and variable declaring
let currentQuestion = document.getElementById("question");
let selectedOption = "";
let theQuestion = "";
let theOptions = [];
let userInput = "";
let answerFound = false;
let questionIndex = 0;
let userScore = 0;

// function for loading new question
function loadQuestion() {
  theQuestion = questions[questionIndex].question;
  currentQuestion.innerHTML = theQuestion;

  theOptions = questions[questionIndex].answers;

  for (let j = 0; j < theOptions.length; j++) {
    const button = document.getElementById(`option${j + 1}`);
    button.innerHTML = theOptions[j].option;
  }
}

//prompt for the user to enter an Option
function takeInput() {
  if (userInput == null || userInput == "") {
    userInput = prompt("Type your answer index: ( Eg: C )");

    if (userInput !== null) {
      selectedOption = userInput.toUpperCase();
      for (let i = 0; i < theOptions.length; i++) {
        const button = document.getElementById(`option${i + 1}`);
        if (selectedOption == theOptions[i].index)
          button.classList.add("option-tile--selected");
      }
    }
  }
}

// function to check the answer
function checkAnswer() {
  if (userInput == null || userInput == "") {
    alert("Select any option and Enter ites option name");
  } else if (answerFound) {
    alert('Please click "Next" button for next question');
  } else {
    for (let i = 0; i < theOptions.length; i++) {
      const optn = theOptions[i];
      const button = document.getElementById(`option${i + 1}`);
      if (optn.correct == true) {
        if (optn.index == selectedOption) {
          alert("Correct answer ✅ You got 1 score");
          answerFound = true;
          button.classList.add("option-tile--right");
        }
      }
    }
    if (!answerFound) {
      alert("Wrong answer ❌");
    } else {
      userScore += 1;
    }
  }
}

// function for getting next question
function nextQuestion() {
  if (questionIndex <= questions.length) {
    questionIndex += 1;
    userInput = "";
    answerFound = false;
    loadQuestion();

    let optionsElement = document.querySelectorAll(".option-tile");

    optionsElement.forEach((optionsElement) => {
      optionsElement.classList.remove("option-tile--right");
      optionsElement.classList.remove("option-tile--selected");
    });
  } else {
    alert(`The game is over🎉🎉 Your score is: ${userScore} out of 10`);
    alert(` Refresh this page to play again`);
  }
}

alert(
  'Welcome to Quiz App. Their is 10 questions. After selecting an option, check your answer using "check" button. Click "Next" button to get next question. After 10th question triple click "Next" to get your total score.  Good luck👍'
);
window.onload = loadQuestion();
