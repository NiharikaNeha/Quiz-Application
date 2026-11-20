import { quizQuestion } from "./data/data.js";

console.log("JavaScript connected!");
console.log(quizQuestion);

const questionElement = document.querySelector("#question");

const optionElements = [
    document.querySelector(".option-1"),
    document.querySelector(".option-2"),
    document.querySelector(".option-3"),
    document.querySelector(".option-4")
];

let currentQuiz = 0;

function loadQues() {
    const ques = quizQuestion[currentQuiz];

    questionElement.innerText = ques.question;

    ques.options.forEach((option, index) => {
        optionElements[index].innerHTML = option;
    });
}

loadQues();