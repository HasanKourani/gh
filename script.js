const questions = [
  {
    question: "When did it all start?",
    answers: [
      { text: "5 may", correct: false },
      { text: "11 February", correct: false },
      { text: "9 June", correct: false },
      { text: "5 February", correct: true },
    ],
  },
  {
    question: "When was our first Date?",
    answers: [
      { text: "9 june", correct: false },
      { text: "5 May", correct: true },
      { text: "29 January", correct: false },
      { text: "6 April", correct: false },
    ],
  },
  {
    question: "Have we ever fought?",
    answers: [
      { text: "NO", correct: true },
      { text: "Of course not", correct: true },
      { text: "US? FIGHT? HUH? NOPE", correct: true },
      { text: "HELL NAW", correct: true },
    ],
  },
  {
    question: "What's our favourite date spot?",
    answers: [
      { text: "Dar Alma", correct: true },
      { text: "Naqoura", correct: true },
      { text: "5arab", correct: false },
      { text: "7adi2a", correct: false },
    ],
  },
  {
    question: "Do you dislike me?",
    answers: [
      { text: "Yes", correct: false },
      { text: "YEAHHH BUDDYY", correct: false },
      { text: "Sure", correct: false },
      { text: "HELL YEAH", correct: false },
    ],
  },
  {
    question: "What's our favourite fast food meal?",
    answers: [
      { text: "Francisco", correct: false },
      { text: "Chicken Deluxe", correct: true },
      { text: "Chicken Special", correct: true },
      { text: "Fries", correct: true },
    ],
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");

function startGame() {
  currentQuestionIndex = 0;
  score = 0;
  scoreContainer.classList.add("hidden");
  questionContainer.classList.remove("hidden");
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.textContent = question.question;
  answerButtons.innerHTML = "";
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () =>
      selectAnswer(button, answer.correct)
    );
    answerButtons.appendChild(button);
  });
}

function selectAnswer(button, isCorrect) {
  if (isCorrect) {
    score++;
  }
  Array.from(answerButtons.children).forEach((btn) => {
    btn.disabled = true;
    btn.classList.add(btn === button && isCorrect ? "correct" : "incorrect");
  });

  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion(questions[currentQuestionIndex]);
    } else {
      endGame();
    }
  }, 50);
}

function endGame() {
  questionContainer.classList.add("hidden");
  scoreContainer.classList.remove("hidden");
  scoreElement.textContent = score;
}

restartButton.addEventListener("click", startGame);

startGame();
