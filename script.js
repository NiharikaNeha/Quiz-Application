import { quizQuestion } from "./data/data.js";

// Initialization Of Javascript
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

const deselectedAnswers = () => {
    return answerElement.forEach((curELm) => (curELm.checked = false));
}

// Importing Question And Option Data In UI

// Questions
const loadQues = () => {
  const ques = quizQuestion[currentQuiz];

  questionElement.innerText = ques.question;

  // Options
  ques.options.forEach((curOption, index) => {
    optionElements[index].innerHTML = curOption;
  });
};

// Calling The Function
loadQues();

// Gettin Selected Answer Function On Button Click
const getSelectedOption = () => {
  let ans_index;
  answerElement.forEach((curOption, index) => {
    if (curOption.checked) {
      ans_index = index;
    }
  });
  return ans_index;
};
btn.addEventListener("click", () => {
  const selectedOptionIndex = getSelectedOption();

  // Incrementing The Current Quiz
  currentQuiz++;

  if (currentQuiz < quizQuestion.length) {
    // Deselecting The Previous Answer
    deselectedAnswers();
    loadQues();
  }
});
