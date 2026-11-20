// Importing my data.js
import {quizQuestion} from "./data/data.js";

// Initialization Of JavaScript

const answerElement = document.querySelectorAll(".answer");
const [questionElement, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    "#question, .option-1, .option-2, .option-3, .option-4",
  );

const btn = document.getElementById("btn")

const currentQuiz = 0;

const  score = 0;

// Loading The Quiz Functions
// Questions

let loadQues = () => {
    const ques = quizQuestion[currentQuiz];

    console.log(ques);

    questionElement.innerText = ques.question;
}

loadQues();