import { quizQuestion } from "./data/data.js";

// Initialization Of Javascript
const answerElement = document.querySelectorAll(".answer");

const questionElement = document.querySelector("#question");

const optionElements = [
    document.querySelector(".option-1"),
    document.querySelector(".option-2"),
    document.querySelector(".option-3"),
    document.querySelector(".option-4")
];

const btn = document.getElementById("btn");

let currentQuiz = 0;
let score = 0;

// Importing Question and option data in UI

// Questions
const loadQues = () => {
    const ques = quizQuestion[currentQuiz];

    questionElement.innerText = ques.question;

// Options
    ques.options.forEach((option, index) => {
        optionElements[index].innerHTML = option;
    });
};

// Calling The Function
loadQues();