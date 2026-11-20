import { quizQuestion } from "./data/data.js";

// Initialization Of Javascript
const quiz = document.querySelector("#quiz");

const answerElement = document.querySelectorAll(".answer");

const questionElement = document.querySelector("#question");

const optionElements = [
  document.querySelector(".option-1"),
  document.querySelector(".option-2"),
  document.querySelector(".option-3"),
  document.querySelector(".option-4"),
];

const btn = document.getElementById("btn");

let currentQuiz = 0;
let score = 0;

// Deselecting Previous Answers
const deselectedAnswers = () => {
  answerElement.forEach((curELm) => {
    curELm.checked = false;
  });
};

// Loading Questions And Options
const loadQues = () => {
  const ques = quizQuestion[currentQuiz];

  questionElement.innerText = ques.question;

  ques.options.forEach((curOption, index) => {
    optionElements[index].innerText = curOption;

    // Assigning Index Values
    answerElement[index].value = index;
    answerElement[index].checked = false;
  });
};

// Calling The Function
loadQues();

// Getting Selected Answer
const getSelectedOption = () => {
  let ans_index;

  answerElement.forEach((curOption, index) => {
    if (curOption.checked) {
      ans_index = index;
    }
  });

  return ans_index;
};

// Button Click Event
btn.addEventListener("click", () => {
  const selectedOptionIndex = getSelectedOption();

  // Checking If An Option Is Selected
  if (selectedOptionIndex === undefined) {
    alert("Please select an answer!");
    return;
  }

  // Adding Score
if (
    quizQuestion[currentQuiz].options[selectedOptionIndex] ===
    quizQuestion[currentQuiz].answer
) {
    score += 1;
}

  // Incrementing Current Quiz
  currentQuiz++;

  if (currentQuiz < quizQuestion.length) {
    // Loading Next Question
    deselectedAnswers();
    loadQues();
  } else {

    // Showing Final Result
    quiz.innerHTML = `
            <div class="result">

                <div class="sparkle sparkle-1">✦</div>
                <div class="sparkle sparkle-2">♡</div>
                <div class="sparkle sparkle-3">✧</div>

                <div class="teddy">🧸</div>

                <div class="congrats-tag">YAY! YOU DID IT ♡</div>

                <h1>Quiz Completed!</h1>

                <p class="result-message">
                    So proud of you, little star! ✨
                </p>

                <div class="score-card">
                    <div class="score-title">🌷 YOUR SCORE 🌷</div>

                    <h2>${score}<span>/${quizQuestion.length}</span></h2>

                    <p>Correct Answers ♡</p>
                </div>

                <div class="cute-message">
                    Keep blooming and keep learning! 🌸
                </div>

                <button class="reload-button" onclick="location.reload()">
                    Play Again <span>♡</span>
                </button>

            </div>
        `;
  }
});
